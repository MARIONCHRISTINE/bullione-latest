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

$action = $input['action'] ?? '';

try {
    if ($action === 'request_reset') {
        // Step 1: Request password reset
        if (!isset($input['email']) || empty(trim($input['email']))) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Email is required']);
            exit();
        }
        
        // Validate email format
        if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Invalid email format']);
            exit();
        }
        
        // Check if user exists and is active
        $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ? AND status = 'active'");
        $stmt->execute([strtolower(trim($input['email']))]);
        $user = $stmt->fetch();
        
        if ($user) {
            // Generate reset token
            $reset_token = bin2hex(random_bytes(32));
            $expires = date('Y-m-d H:i:s', strtotime('+1 hour'));
            
            // Save reset token
            $stmt = $pdo->prepare("UPDATE users SET reset_token = ?, reset_token_expires = ? WHERE id = ?");
            $stmt->execute([$reset_token, $expires, $user['id']]);
            
            // Return token (in real app, you'd send this via email)
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'message' => 'Reset token generated successfully. Check your email.',
                'token' => $reset_token // In production, don't return this - send via email
            ]);
        } else {
            // Don't reveal if email exists or not for security
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'message' => 'If the email exists, a reset link has been sent'
            ]);
        }
        
    } elseif ($action === 'reset_password') {
        // Step 2: Reset password with token
        if (!isset($input['token']) || !isset($input['new_password']) || empty(trim($input['token'])) || empty($input['new_password'])) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Token and new password are required']);
            exit();
        }
        
        // Validate password length
        if (strlen($input['new_password']) < 8) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Password must be at least 8 characters long']);
            exit();
        }
        
        // Find user with valid token
        $stmt = $pdo->prepare("SELECT id FROM users WHERE reset_token = ? AND reset_token_expires > NOW() AND status = 'active'");
        $stmt->execute([trim($input['token'])]);
        $user = $stmt->fetch();
        
        if (!$user) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Invalid or expired reset token']);
            exit();
        }
        
        // Update password and clear reset token
        $password_hash = password_hash($input['new_password'], PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("UPDATE users SET password_hash = ?, reset_token = NULL, reset_token_expires = NULL WHERE id = ?");
        $stmt->execute([$password_hash, $user['id']]);
        
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Password reset successfully'
        ]);
        
    } else {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid action. Use "request_reset" or "reset_password"']);
    }
    
} catch (PDOException $e) {
    error_log("Database error during password reset: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Password reset failed due to server error']);
}
?>
