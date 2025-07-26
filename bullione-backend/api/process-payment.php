<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Check if config file exists
if (!file_exists('../config/db.php')) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database configuration file not found']);
    exit();
}

require_once '../config/db.php';

// Check if database connection was successful
if (!isset($pdo)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database connection failed']);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. Use POST.']);
    exit();
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON input']);
    exit();
}

// Validate required fields
$required_fields = ['donation_id', 'amount', 'card_number', 'expiry_month', 'expiry_year', 'cvv', 'cardholder_name', 'phone_number'];

foreach ($required_fields as $field) {
    if (!isset($input[$field]) || (is_string($input[$field]) && empty(trim($input[$field])))) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => "Field '$field' is required"]);
        exit();
    }
}

// Validate card number (basic Luhn algorithm)
function validateCardNumber($number) {
    $number = preg_replace('/\D/', '', $number);
    $length = strlen($number);
    
    if ($length < 13 || $length > 19) {
        return false;
    }
    
    $sum = 0;
    $alternate = false;
    
    for ($i = $length - 1; $i >= 0; $i--) {
        $digit = intval($number[$i]);
        
        if ($alternate) {
            $digit *= 2;
            if ($digit > 9) {
                $digit = ($digit % 10) + 1;
            }
        }
        
        $sum += $digit;
        $alternate = !$alternate;
    }
    
    return ($sum % 10) == 0;
}

// Validate card details
$card_number = preg_replace('/\D/', '', $input['card_number']);
if (!validateCardNumber($card_number)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid card number']);
    exit();
}

// Validate expiry date
$current_year = date('Y');
$current_month = date('n');
$expiry_year = intval($input['expiry_year']);
$expiry_month = intval($input['expiry_month']);

if ($expiry_year < $current_year || ($expiry_year == $current_year && $expiry_month < $current_month)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Card has expired']);
    exit();
}

// Validate CVV
if (strlen($input['cvv']) < 3 || strlen($input['cvv']) > 4) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid CVV']);
    exit();
}

// Validate phone number (basic validation)
$phone = preg_replace('/\D/', '', $input['phone_number']);
if (strlen($phone) < 10) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid phone number']);
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
    
    // Determine card brand
    $card_brand = 'unknown';
    $first_digit = substr($card_number, 0, 1);
    $first_two = substr($card_number, 0, 2);
    
    if ($first_digit == '4') {
        $card_brand = 'visa';
    } elseif (in_array($first_two, ['51', '52', '53', '54', '55']) || ($first_two >= '22' && $first_two <= '27')) {
        $card_brand = 'mastercard';
    } elseif (in_array($first_two, ['34', '37'])) {
        $card_brand = 'amex';
    }
    
    // Generate transaction reference
    $transaction_reference = 'TXN_' . time() . '_' . rand(1000, 9999);
    
    // Create transaction record
    $transaction_data = [
        'donation_id' => $input['donation_id'],
        'user_id' => $donation['user_id'],
        'donor_name' => $donation['donor_name'],
        'donor_email' => $donation['donor_email'],
        'donor_phone' => $phone,
        'amount' => $donation['amount'],
        'currency' => 'USD',
        'cause' => $donation['cause'],
        'payment_method' => $card_brand,
        'card_last_four' => substr($card_number, -4),
        'card_brand' => $card_brand,
        'status' => 'processing',
        'transaction_reference' => $transaction_reference,
        'created_at' => date('Y-m-d H:i:s')
    ];
    
    $columns = implode(', ', array_keys($transaction_data));
    $placeholders = ':' . implode(', :', array_keys($transaction_data));
    
    $sql = "INSERT INTO transactions ($columns) VALUES ($placeholders)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($transaction_data);
    
    $transaction_id = $pdo->lastInsertId();
    
    // Simulate payment processing (In real implementation, integrate with payment gateway)
    sleep(2); // Simulate processing time
    
    // Simulate PIN verification (In real implementation, this would be handled by payment gateway)
    $pin_verification_success = true; // This would come from actual payment gateway
    
    if ($pin_verification_success) {
        // Simulate M-Pesa transfer (In real implementation, integrate with M-Pesa API)
        $mpesa_success = simulateMpesaTransfer($donation['amount'], '+254112648637');
        
        if ($mpesa_success['success']) {
            // Update transaction status
            $update_stmt = $pdo->prepare("UPDATE transactions SET status = 'completed', mpesa_transaction_id = ?, completed_at = NOW(), gateway_response = ? WHERE id = ?");
            $update_stmt->execute([
                $mpesa_success['transaction_id'],
                json_encode($mpesa_success),
                $transaction_id
            ]);
            
            // Update donation status
            $donation_update = $pdo->prepare("UPDATE donations SET status = 'completed', payment_method = ?, payment_reference = ?, updated_at = NOW() WHERE id = ?");
            $donation_update->execute([
                $card_brand,
                $transaction_reference,
                $input['donation_id']
            ]);
            
            // Return success response
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'message' => 'Payment processed successfully',
                'transaction_id' => $transaction_id,
                'transaction_reference' => $transaction_reference,
                'mpesa_transaction_id' => $mpesa_success['transaction_id'],
                'amount' => $donation['amount'],
                'status' => 'completed'
            ]);
        } else {
            // M-Pesa transfer failed
            $update_stmt = $pdo->prepare("UPDATE transactions SET status = 'failed', failure_reason = ?, gateway_response = ? WHERE id = ?");
            $update_stmt->execute([
                'M-Pesa transfer failed: ' . $mpesa_success['error'],
                json_encode($mpesa_success),
                $transaction_id
            ]);
            
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'error' => 'Payment failed: ' . $mpesa_success['error'],
                'transaction_reference' => $transaction_reference
            ]);
        }
    } else {
        // PIN verification failed
        $update_stmt = $pdo->prepare("UPDATE transactions SET status = 'failed', failure_reason = 'PIN verification failed' WHERE id = ?");
        $update_stmt->execute([$transaction_id]);
        
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => 'PIN verification failed',
            'transaction_reference' => $transaction_reference
        ]);
    }
    
} catch (PDOException $e) {
    error_log("Database error during payment processing: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Payment processing failed: Database error']);
}

// Simulate M-Pesa transfer function
function simulateMpesaTransfer($amount, $phone_number) {
    // In real implementation, this would integrate with M-Pesa API
    // For now, we'll simulate a successful transfer
    
    $success_rate = 0.95; // 95% success rate for simulation
    $random = mt_rand() / mt_getrandmax();
    
    if ($random <= $success_rate) {
        return [
            'success' => true,
            'transaction_id' => 'MP' . time() . rand(1000, 9999),
            'amount' => $amount,
            'phone_number' => $phone_number,
            'timestamp' => date('Y-m-d H:i:s')
        ];
    } else {
        return [
            'success' => false,
            'error' => 'Insufficient funds or network error',
            'timestamp' => date('Y-m-d H:i:s')
        ];
    }
}
?>
