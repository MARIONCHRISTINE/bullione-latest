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
$required_fields = ['title', 'description', 'category', 'sector', 'type'];

foreach ($required_fields as $field) {
    if (!isset($input[$field]) || (is_string($input[$field]) && empty(trim($input[$field])))) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => "Field '$field' is required"]);
        exit();
    }
}

// Validate numeric fields if provided
if (isset($input['minInvestment']) && !is_numeric($input['minInvestment'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Minimum investment must be a valid number']);
    exit();
}

if (isset($input['expectedReturn']) && !is_numeric($input['expectedReturn'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Expected return must be a valid number']);
    exit();
}

// Validate risk level if provided
if (isset($input['riskLevel']) && !in_array($input['riskLevel'], ['low', 'medium', 'high'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Risk level must be low, medium, or high']);
    exit();
}

try {
    // Prepare data for insertion
    $data = [
        'title' => trim($input['title']),
        'description' => trim($input['description']),
        'icon' => isset($input['icon']) ? trim($input['icon']) : null,
        'link' => isset($input['link']) ? trim($input['link']) : null,
        'features' => isset($input['features']) ? json_encode($input['features']) : null,
        'minInvestment' => isset($input['minInvestment']) ? (float)$input['minInvestment'] : null,
        'expectedReturn' => isset($input['expectedReturn']) ? (float)$input['expectedReturn'] : null,
        'riskLevel' => isset($input['riskLevel']) ? $input['riskLevel'] : null,
        'category' => trim($input['category']),
        'sector' => trim($input['sector']),
        'type' => trim($input['type']),
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s')
    ];

    // Insert service into database
    $columns = implode(', ', array_keys($data));
    $placeholders = ':' . implode(', :', array_keys($data));
    
    $sql = "INSERT INTO services ($columns) VALUES ($placeholders)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($data);
    
    $service_id = $pdo->lastInsertId();
    
    // Return success response
    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => 'Service added successfully',
        'service_id' => (int)$service_id,
        'service' => [
            'id' => (int)$service_id,
            'title' => $data['title'],
            'category' => $data['category'],
            'sector' => $data['sector'],
            'type' => $data['type']
        ]
    ]);
    
} catch (PDOException $e) {
    error_log("Database error during service creation: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Service creation failed: Database error']);
}
?>
