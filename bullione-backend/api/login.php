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
if (!isset($input['email']) || !isset($input['password']) || empty(trim($input['email'])) || empty($input['password'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Email and password are required']);
    exit();
}

// Validate email format
if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email format']);
    exit();
}

try {
    // Get user from database - include all status fields
    $stmt = $pdo->prepare("SELECT id, user_type, account_type, first_name, last_name, email, password_hash, status, is_active, email_verified, organization_name, created_at FROM users WHERE email = ?");
    $stmt->execute([strtolower(trim($input['email']))]);
    $user = $stmt->fetch();
    
    if (!$user) {
        http_response_code(401);
        echo json_encode(['success' => false, 'error' => 'Invalid email or password']);
        exit();
    }
    
    // Verify password
    if (!password_verify($input['password'], $user['password_hash'])) {
        http_response_code(401);
        echo json_encode(['success' => false, 'error' => 'Invalid email or password']);
        exit();
    }
    
    // No status checks - proceed directly to login success
    
    // Update last login timestamp (optional)
    try {
        $updateStmt = $pdo->prepare("UPDATE users SET updated_at = CURRENT_TIMESTAMP WHERE id = ?");
        $updateStmt->execute([$user['id']]);
    } catch (PDOException $e) {
        // Log but don't fail login if timestamp update fails
        error_log("Failed to update last login timestamp: " . $e->getMessage());
    }
    
    // Return success response with user data
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Login successful',
        'user' => [
            'id' => (int)$user['id'],
            'user_type' => $user['user_type'],
            'account_type' => $user['account_type'],
            'first_name' => $user['first_name'],
            'last_name' => $user['last_name'],
            'email' => $user['email'],
            'status' => $user['status'],
            'is_active' => (bool)$user['is_active'],
            'email_verified' => (bool)$user['email_verified'],
            'organization_name' => $user['organization_name'],
            'member_since' => $user['created_at']
        ]
    ]);
    
} catch (PDOException $e) {
    error_log("Database error during login: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Login failed due to server error']);
}
?>
