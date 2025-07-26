<?php
// Real Payment Processing with Multiple Gateways
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once '../config/db.php';
require_once '../config/payment-config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON input']);
    exit();
}

// Validate required fields
$required_fields = ['donation_id', 'amount', 'payment_method', 'phone_number'];
foreach ($required_fields as $field) {
    if (!isset($input[$field]) || empty(trim($input[$field]))) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => "Field '$field' is required"]);
        exit();
    }
}

// Validate payment configuration
$config_errors = validatePaymentConfig();
if (!empty($config_errors)) {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'error' => 'Payment configuration incomplete',
        'details' => $config_errors
    ]);
    exit();
}

try {
    // Get donation details
    $stmt = $pdo->prepare("SELECT * FROM donations WHERE id = ?");
    $stmt->execute([$input['donation_id']]);
    $donation = $stmt->fetch();
    
    if (!$donation) {
        http_response_code(404);
        echo json_encode(['success' => false, 'error' => 'Donation not found']);
        exit();
    }

    $transaction_reference = 'TXN_' . time() . '_' . rand(1000, 9999);
    $payment_method = strtolower($input['payment_method']);

    logPaymentTransaction($payment_method, 'initiate', $input);

    // Process payment based on selected method
    switch ($payment_method) {
        case 'stripe':
            $result = processStripePayment($input, $donation, $transaction_reference);
            break;
        case 'flutterwave':
            $result = processFlutterwavePayment($input, $donation, $transaction_reference);
            break;
        case 'paystack':
            $result = processPaystackPayment($input, $donation, $transaction_reference);
            break;
        case 'mpesa':
            $result = processMpesaPayment($input, $donation, $transaction_reference);
            break;
        default:
            $result = ['success' => false, 'error' => 'Unsupported payment method'];
    }

    logPaymentTransaction($payment_method, 'response', $input, $result);

    // Record transaction in database
    $transaction_data = [
        'donation_id' => $input['donation_id'],
        'user_id' => $donation['user_id'],
        'donor_name' => $donation['donor_name'],
        'donor_email' => $donation['donor_email'],
        'donor_phone' => $input['phone_number'],
        'amount' => $donation['amount'],
        'currency' => 'USD',
        'cause' => $donation['cause'],
        'payment_method' => $payment_method,
        'status' => $result['success'] ? 'completed' : 'failed',
        'transaction_reference' => $transaction_reference,
        'gateway_response' => json_encode($result),
        'created_at' => date('Y-m-d H:i:s')
    ];

    if ($result['success']) {
        $transaction_data['completed_at'] = date('Y-m-d H:i:s');
        $transaction_data['mpesa_transaction_id'] = $result['transaction_id'] ?? null;
    } else {
        $transaction_data['failure_reason'] = $result['error'];
    }

    $columns = implode(', ', array_keys($transaction_data));
    $placeholders = ':' . implode(', :', array_keys($transaction_data));
    
    $sql = "INSERT INTO transactions ($columns) VALUES ($placeholders)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($transaction_data);
    
    $transaction_id = $pdo->lastInsertId();

    if ($result['success']) {
        // Update donation status
        $donation_update = $pdo->prepare("UPDATE donations SET status = 'completed', payment_method = ?, payment_reference = ?, updated_at = NOW() WHERE id = ?");
        $donation_update->execute([$payment_method, $transaction_reference, $input['donation_id']]);

        // Send confirmation SMS
        sendConfirmationSMS($input['phone_number'], $donation['amount'], $transaction_reference);

        echo json_encode([
            'success' => true,
            'message' => 'Payment processed successfully',
            'transaction_id' => $transaction_id,
            'transaction_reference' => $transaction_reference,
            'gateway_transaction_id' => $result['transaction_id'] ?? null,
            'amount' => $donation['amount'],
            'payment_link' => $result['payment_link'] ?? null
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'error' => $result['error'],
            'transaction_reference' => $transaction_reference
        ]);
    }

} catch (Exception $e) {
    error_log("Payment processing error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Payment processing failed']);
}

// M-Pesa Payment Processing (Real Safaricom API)
function processMpesaPayment($input, $donation, $transaction_reference) {
    try {
        // Step 1: Get OAuth token
        $token = getMpesaAccessToken();
        if (!$token) {
            return ['success' => false, 'error' => 'Failed to get M-Pesa access token'];
        }

        // Step 2: Initiate STK Push
        $timestamp = date('YmdHis');
        $password = base64_encode(MPESA_SHORTCODE . MPESA_PASSKEY . $timestamp);

        $payload = [
            'BusinessShortCode' => MPESA_SHORTCODE,
            'Password' => $password,
            'Timestamp' => $timestamp,
            'TransactionType' => 'CustomerPayBillOnline',
            'Amount' => (int)$donation['amount'],
            'PartyA' => $input['phone_number'],
            'PartyB' => MPESA_SHORTCODE,
            'PhoneNumber' => $input['phone_number'],
            'CallBackURL' => MPESA_CALLBACK_URL,
            'AccountReference' => $transaction_reference,
            'TransactionDesc' => 'Bullione Donation - ' . $donation['cause']
        ];

        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_URL => getMpesaBaseUrl() . '/mpesa/stkpush/v1/processrequest',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => [
                'Authorization: Bearer ' . $token,
                'Content-Type: application/json'
            ],
            CURLOPT_POSTFIELDS => json_encode($payload)
        ]);

        $response = curl_exec($curl);
        $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        curl_close($curl);

        $result = json_decode($response, true);

        if ($httpCode === 200 && $result['ResponseCode'] === '0') {
            return [
                'success' => true,
                'transaction_id' => $result['CheckoutRequestID'],
                'message' => 'STK Push sent to your phone. Please enter your M-Pesa PIN.'
            ];
        } else {
            return ['success' => false, 'error' => $result['errorMessage'] ?? 'M-Pesa payment failed'];
        }
    } catch (Exception $e) {
        return ['success' => false, 'error' => 'M-Pesa processing error: ' . $e->getMessage()];
    }
}

function getMpesaAccessToken() {
    $credentials = base64_encode(MPESA_CONSUMER_KEY . ':' . MPESA_CONSUMER_SECRET);
    
    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL => getMpesaBaseUrl() . '/oauth/v1/generate?grant_type=client_credentials',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
            'Authorization: Basic ' . $credentials
        ]
    ]);

    $response = curl_exec($curl);
    curl_close($curl);

    $result = json_decode($response, true);
    return $result['access_token'] ?? null;
}

// Flutterwave Payment Processing
function processFlutterwavePayment($input, $donation, $transaction_reference) {
    try {
        $payload = [
            'tx_ref' => $transaction_reference,
            'amount' => $donation['amount'],
            'currency' => 'USD',
            'redirect_url' => 'https://yourdomain.com/payment-success',
            'customer' => [
                'email' => $donation['donor_email'],
                'phonenumber' => $input['phone_number'],
                'name' => $donation['donor_name']
            ],
            'customizations' => [
                'title' => BUSINESS_NAME . ' Donation',
                'description' => 'Donation to ' . $donation['cause'],
                'logo' => 'https://yourdomain.com/logo.png'
            ]
        ];

        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_URL => getFlutterwaveBaseUrl() . '/payments',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => [
                'Authorization: Bearer ' . FLUTTERWAVE_SECRET_KEY,
                'Content-Type: application/json'
            ],
            CURLOPT_POSTFIELDS => json_encode($payload)
        ]);

        $response = curl_exec($curl);
        $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        curl_close($curl);

        $result = json_decode($response, true);

        if ($httpCode === 200 && $result['status'] === 'success') {
            return [
                'success' => true,
                'transaction_id' => $result['data']['id'],
                'payment_link' => $result['data']['link']
            ];
        } else {
            return ['success' => false, 'error' => $result['message'] ?? 'Flutterwave payment failed'];
        }
    } catch (Exception $e) {
        return ['success' => false, 'error' => 'Flutterwave processing error: ' . $e->getMessage()];
    }
}

// Paystack Payment Processing
function processPaystackPayment($input, $donation, $transaction_reference) {
    try {
        $payload = [
            'email' => $donation['donor_email'],
            'amount' => $donation['amount'] * 100, // Paystack uses kobo
            'reference' => $transaction_reference,
            'callback_url' => 'https://yourdomain.com/payment-success',
            'metadata' => [
                'donation_id' => $donation['id'],
                'donor_name' => $donation['donor_name'],
                'cause' => $donation['cause']
            ]
        ];

        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_URL => getPaystackBaseUrl() . '/transaction/initialize',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => [
                'Authorization: Bearer ' . PAYSTACK_SECRET_KEY,
                'Content-Type: application/json'
            ],
            CURLOPT_POSTFIELDS => json_encode($payload)
        ]);

        $response = curl_exec($curl);
        $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        curl_close($curl);

        $result = json_decode($response, true);

        if ($httpCode === 200 && $result['status'] === true) {
            return [
                'success' => true,
                'transaction_id' => $result['data']['reference'],
                'payment_link' => $result['data']['authorization_url']
            ];
        } else {
            return ['success' => false, 'error' => $result['message'] ?? 'Paystack payment failed'];
        }
    } catch (Exception $e) {
        return ['success' => false, 'error' => 'Paystack processing error: ' . $e->getMessage()];
    }
}

// Stripe Payment Processing
function processStripePayment($input, $donation, $transaction_reference) {
    try {
        $curl = curl_init();
        
        curl_setopt_array($curl, [
            CURLOPT_URL => getStripeBaseUrl() . '/payment_intents',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => [
                'Authorization: Bearer ' . STRIPE_SECRET_KEY,
                'Content-Type: application/x-www-form-urlencoded'
            ],
            CURLOPT_POSTFIELDS => http_build_query([
                'amount' => $donation['amount'] * 100, // Stripe uses cents
                'currency' => 'usd',
                'payment_method_types[]' => 'card',
                'description' => BUSINESS_NAME . ' Donation to ' . $donation['cause'],
                'metadata[donation_id]' => $donation['id'],
                'metadata[transaction_reference]' => $transaction_reference
            ])
        ]);

        $response = curl_exec($curl);
        $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        curl_close($curl);

        $result = json_decode($response, true);

        if ($httpCode === 200 && isset($result['client_secret'])) {
            return [
                'success' => true,
                'transaction_id' => $result['id'],
                'client_secret' => $result['client_secret']
            ];
        } else {
            return ['success' => false, 'error' => $result['error']['message'] ?? 'Stripe payment failed'];
        }
    } catch (Exception $e) {
        return ['success' => false, 'error' => 'Stripe processing error: ' . $e->getMessage()];
    }
}

// SMS Confirmation using Africa's Talking
function sendConfirmationSMS($phone, $amount, $reference) {
    try {
        $message = "Thank you! Your donation of $" . $amount . " has been processed successfully. Reference: " . $reference . " - " . BUSINESS_NAME;
        
        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_URL => 'https://api.africastalking.com/version1/messaging',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => [
                'apiKey: ' . SMS_API_KEY,
                'Content-Type: application/x-www-form-urlencoded'
            ],
            CURLOPT_POSTFIELDS => http_build_query([
                'username' => SMS_USERNAME,
                'to' => $phone,
                'message' => $message,
                'from' => SMS_SENDER_ID
            ])
        ]);

        $response = curl_exec($curl);
        curl_close($curl);
        
        return json_decode($response, true);
    } catch (Exception $e) {
        error_log("SMS sending failed: " . $e->getMessage());
        return false;
    }
}
?>
