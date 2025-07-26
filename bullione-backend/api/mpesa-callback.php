<?php
// M-Pesa Callback Handler
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');

require_once '../config/db.php';

// Get the callback data
$callback_data = json_decode(file_get_contents('php://input'), true);

// Log the callback for debugging
error_log("M-Pesa Callback: " . json_encode($callback_data));

try {
    if (isset($callback_data['Body']['stkCallback'])) {
        $stk_callback = $callback_data['Body']['stkCallback'];
        $checkout_request_id = $stk_callback['CheckoutRequestID'];
        $result_code = $stk_callback['ResultCode'];
        $result_desc = $stk_callback['ResultDesc'];

        if ($result_code == 0) {
            // Payment successful
            $callback_metadata = $stk_callback['CallbackMetadata']['Item'];
            $mpesa_receipt_number = '';
            $transaction_date = '';
            $phone_number = '';

            foreach ($callback_metadata as $item) {
                switch ($item['Name']) {
                    case 'MpesaReceiptNumber':
                        $mpesa_receipt_number = $item['Value'];
                        break;
                    case 'TransactionDate':
                        $transaction_date = $item['Value'];
                        break;
                    case 'PhoneNumber':
                        $phone_number = $item['Value'];
                        break;
                }
            }

            // Update transaction status
            $stmt = $pdo->prepare("UPDATE transactions SET status = 'completed', mpesa_transaction_id = ?, completed_at = NOW(), gateway_response = ? WHERE transaction_reference = (SELECT payment_reference FROM donations WHERE id IN (SELECT donation_id FROM transactions WHERE mpesa_transaction_id = ? OR transaction_reference LIKE ?))");
            $stmt->execute([
                $mpesa_receipt_number,
                json_encode($callback_data),
                $checkout_request_id,
                '%' . $checkout_request_id . '%'
            ]);

            // Transfer to your M-Pesa number
            transferToMpesa($mpesa_receipt_number, $callback_metadata);

        } else {
            // Payment failed
            $stmt = $pdo->prepare("UPDATE transactions SET status = 'failed', failure_reason = ?, gateway_response = ? WHERE mpesa_transaction_id = ?");
            $stmt->execute([
                $result_desc,
                json_encode($callback_data),
                $checkout_request_id
            ]);
        }
    }

    echo json_encode(['ResultCode' => 0, 'ResultDesc' => 'Success']);

} catch (Exception $e) {
    error_log("M-Pesa callback error: " . $e->getMessage());
    echo json_encode(['ResultCode' => 1, 'ResultDesc' => 'Error processing callback']);
}

function transferToMpesa($receipt_number, $metadata) {
    // This would initiate a B2C transfer to your M-Pesa number
    // Implementation depends on your M-Pesa setup and permissions
    error_log("Transfer initiated for receipt: " . $receipt_number);
}
?>
