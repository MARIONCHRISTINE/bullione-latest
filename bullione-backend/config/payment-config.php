<?php
// Payment Gateway Configuration for Bullione Backend
// Store these in environment variables in production for security

// Stripe Configuration (Get from https://dashboard.stripe.com/apikeys)
define('STRIPE_SECRET_KEY', getenv('STRIPE_SECRET_KEY') ?: 'sk_test_your_stripe_secret_key_here');
define('STRIPE_PUBLISHABLE_KEY', getenv('STRIPE_PUBLISHABLE_KEY') ?: 'pk_test_your_stripe_publishable_key_here');

// PayPal Configuration (Get from https://developer.paypal.com/)
define('PAYPAL_CLIENT_ID', getenv('PAYPAL_CLIENT_ID') ?: 'your_paypal_client_id_here');
define('PAYPAL_CLIENT_SECRET', getenv('PAYPAL_CLIENT_SECRET') ?: 'your_paypal_client_secret_here');
define('PAYPAL_MODE', getenv('PAYPAL_MODE') ?: 'sandbox'); // Change to 'live' for production

// M-Pesa Configuration (Safaricom Kenya - Get from https://developer.safaricom.co.ke/)
define('MPESA_CONSUMER_KEY', getenv('MPESA_CONSUMER_KEY') ?: 'your_mpesa_consumer_key_here');
define('MPESA_CONSUMER_SECRET', getenv('MPESA_CONSUMER_SECRET') ?: 'your_mpesa_consumer_secret_here');
define('MPESA_SHORTCODE', getenv('MPESA_SHORTCODE') ?: '174379'); // Your business shortcode
define('MPESA_PASSKEY', getenv('MPESA_PASSKEY') ?: 'your_mpesa_passkey_here');
define('MPESA_CALLBACK_URL', getenv('MPESA_CALLBACK_URL') ?: 'https://yourdomain.com/bullione-backend/api/mpesa-callback.php');
define('MPESA_ENVIRONMENT', getenv('MPESA_ENVIRONMENT') ?: 'sandbox'); // 'sandbox' or 'live'

// Flutterwave Configuration (Get from https://dashboard.flutterwave.com/)
define('FLUTTERWAVE_PUBLIC_KEY', getenv('FLUTTERWAVE_PUBLIC_KEY') ?: 'FLWPUBK_TEST-your_flutterwave_public_key_here');
define('FLUTTERWAVE_SECRET_KEY', getenv('FLUTTERWAVE_SECRET_KEY') ?: 'FLWSECK_TEST-your_flutterwave_secret_key_here');
define('FLUTTERWAVE_ENVIRONMENT', getenv('FLUTTERWAVE_ENVIRONMENT') ?: 'sandbox'); // 'sandbox' or 'live'

// Paystack Configuration (Get from https://dashboard.paystack.com/)
define('PAYSTACK_PUBLIC_KEY', getenv('PAYSTACK_PUBLIC_KEY') ?: 'pk_test_your_paystack_public_key_here');
define('PAYSTACK_SECRET_KEY', getenv('PAYSTACK_SECRET_KEY') ?: 'sk_test_your_paystack_secret_key_here');
define('PAYSTACK_ENVIRONMENT', getenv('PAYSTACK_ENVIRONMENT') ?: 'test'); // 'test' or 'live'

// SMS Configuration (Africa's Talking - Get from https://africastalking.com/)
define('SMS_API_KEY', getenv('SMS_API_KEY') ?: 'your_sms_api_key_here');
define('SMS_USERNAME', getenv('SMS_USERNAME') ?: 'sandbox'); // Change to your username in production
define('SMS_SENDER_ID', getenv('SMS_SENDER_ID') ?: 'BULLIONE');

// Your business details
define('BUSINESS_NAME', getenv('BUSINESS_NAME') ?: 'Bullione');
define('BUSINESS_EMAIL', getenv('BUSINESS_EMAIL') ?: 'payments@bullione.com');
define('MPESA_RECEIVER_NUMBER', getenv('MPESA_RECEIVER_NUMBER') ?: '254112648637'); // Your M-Pesa number

// API URLs based on environment
function getMpesaBaseUrl() {
    return MPESA_ENVIRONMENT === 'live' 
        ? 'https://api.safaricom.co.ke' 
        : 'https://sandbox.safaricom.co.ke';
}

function getFlutterwaveBaseUrl() {
    return 'https://api.flutterwave.com/v3';
}

function getPaystackBaseUrl() {
    return PAYSTACK_ENVIRONMENT === 'live' 
        ? 'https://api.paystack.co' 
        : 'https://api.paystack.co';
}

function getStripeBaseUrl() {
    return 'https://api.stripe.com/v1';
}

// Logging function for payment transactions
function logPaymentTransaction($gateway, $action, $data, $response = null) {
    $log_entry = [
        'timestamp' => date('Y-m-d H:i:s'),
        'gateway' => $gateway,
        'action' => $action,
        'data' => $data,
        'response' => $response
    ];
    
    error_log("PAYMENT_LOG: " . json_encode($log_entry));
}

// Validate required configuration
function validatePaymentConfig() {
    $errors = [];
    
    // Check M-Pesa config
    if (MPESA_CONSUMER_KEY === 'your_mpesa_consumer_key_here') {
        $errors[] = 'M-Pesa Consumer Key not configured';
    }
    
    // Check Flutterwave config
    if (FLUTTERWAVE_SECRET_KEY === 'FLWSECK_TEST-your_flutterwave_secret_key_here') {
        $errors[] = 'Flutterwave Secret Key not configured';
    }
    
    // Check Paystack config
    if (PAYSTACK_SECRET_KEY === 'sk_test_your_paystack_secret_key_here') {
        $errors[] = 'Paystack Secret Key not configured';
    }
    
    // Check Stripe config
    if (STRIPE_SECRET_KEY === 'sk_test_your_stripe_secret_key_here') {
        $errors[] = 'Stripe Secret Key not configured';
    }
    
    return $errors;
}
?>
