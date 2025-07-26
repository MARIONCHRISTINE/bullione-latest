<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: DELETE, OPTIONS');
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

if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. Use DELETE.']);
    exit();
}

// Get service ID from URL parameter
$service_id = $_GET['id'] ?? null;

if (!$service_id) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Service ID is required']);
    exit();
}

// Validate service ID is numeric
if (!is_numeric($service_id)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Service ID must be a valid number']);
    exit();
}

try {
    // First check if service exists
    $checkStmt = $pdo->prepare("SELECT id, title FROM services WHERE id = ?");
    $checkStmt->execute([(int)$service_id]);
    $service = $checkStmt->fetch();
    
    if (!$service) {
        http_response_code(404);
        echo json_encode(['success' => false, 'error' => 'Service not found']);
        exit();
    }
    
    // Delete the service
    $deleteStmt = $pdo->prepare("DELETE FROM services WHERE id = ?");
    $deleteStmt->execute([(int)$service_id]);
    
    // Check if deletion was successful
    if ($deleteStmt->rowCount() === 0) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Failed to delete service']);
        exit();
    }
    
    // Return success response
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Service deleted successfully',
        'deleted_service' => [
            'id' => (int)$service_id,
            'title' => $service['title']
        ]
    ]);
    
} catch (PDOException $e) {
    error_log("Database error during service deletion: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Service deletion failed: Database error']);
}
?>
