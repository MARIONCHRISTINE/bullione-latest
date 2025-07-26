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
$required_fields = ['amount', 'cause', 'donorName', 'donorEmail', 'userType'];

foreach ($required_fields as $field) {
    if (!isset($input[$field]) || (is_string($input[$field]) && empty(trim($input[$field])))) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => "Field '$field' is required"]);
        exit();
    }
}

// Validate amount
if (!is_numeric($input['amount']) || (float)$input['amount'] <= 0) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Amount must be a positive number']);
    exit();
}

// Validate email format
if (!filter_var($input['donorEmail'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email format']);
    exit();
}

// Validate cause
$valid_causes = ['general', 'education', 'women', 'agriculture', 'infrastructure', 'emergency'];
if (!in_array($input['cause'], $valid_causes)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid cause selected']);
    exit();
}

try {
    // Prepare data for insertion
    $data = [
        'amount' => (float)$input['amount'],
        'cause' => $input['cause'],
        'donor_name' => trim($input['donorName']),
        'donor_email' => strtolower(trim($input['donorEmail'])),
        'message' => isset($input['message']) ? trim($input['message']) : null,
        'user_type' => $input['userType'],
        'user_id' => isset($input['userId']) ? (int)$input['userId'] : null,
        'status' => 'pending', // Will be updated when payment is processed
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s')
    ];

    // Insert donation into database
    $columns = implode(', ', array_keys($data));
    $placeholders = ':' . implode(', :', array_keys($data));
    
    $sql = "INSERT INTO donations ($columns) VALUES ($placeholders)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($data);
    
    $donation_id = $pdo->lastInsertId();
    
    // Return success response
    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => 'Donation recorded successfully',
        'donation_id' => (int)$donation_id,
        'donation' => [
            'id' => (int)$donation_id,
            'amount' => $data['amount'],
            'cause' => $data['cause'],
            'donor_name' => $data['donor_name'],
            'status' => $data['status']
        ]
    ]);
    
} catch (PDOException $e) {
    error_log("Database error during donation creation: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Donation recording failed: Database error']);
}
?>
