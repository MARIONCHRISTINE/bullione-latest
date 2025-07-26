<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Check if config file exists
if (!file_exists('../../config/db.php')) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database configuration file not found']);
    exit();
}

require_once '../../config/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. Use POST.']);
    exit();
}

// Get user ID from Authorization header
$headers = getallheaders();
$user_id = null;

if (isset($headers['Authorization'])) {
    $auth_header = $headers['Authorization'];
    $user_id = str_replace('Bearer ', '', $auth_header);
} else {
    http_response_code(401);
    echo json_encode(['success' => false, 'error' => 'Authorization required']);
    exit();
}

try {
    // Verify user exists and is an applicant
    $stmt = $pdo->prepare("SELECT id, user_type FROM users WHERE id = ? AND user_type = 'applicant'");
    $stmt->execute([$user_id]);
    $user = $stmt->fetch();
    
    if (!$user) {
        http_response_code(403);
        echo json_encode(['success' => false, 'error' => 'Access denied. Applicant account required.']);
        exit();
    }

    // Check if file was uploaded
    if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'No file uploaded or upload error']);
        exit();
    }

    // Get form data
    $application_id = $_POST['application_id'] ?? null;
    $document_type = $_POST['document_type'] ?? null;

    if (!$application_id || !$document_type) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Application ID and document type are required']);
        exit();
    }

    // Verify application belongs to user
    $stmt = $pdo->prepare("SELECT id FROM applications WHERE id = ? AND user_id = ?");
    $stmt->execute([$application_id, $user_id]);
    if (!$stmt->fetch()) {
        http_response_code(403);
        echo json_encode(['success' => false, 'error' => 'Application not found or access denied']);
        exit();
    }

    $file = $_FILES['file'];
    $allowed_types = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    $max_size = 10 * 1024 * 1024; // 10MB

    // Validate file type
    if (!in_array($file['type'], $allowed_types)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid file type. Only PDF and Word documents are allowed.']);
        exit();
    }

    // Validate file size
    if ($file['size'] > $max_size) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'File too large. Maximum size is 10MB.']);
        exit();
    }

    // Create upload directory if it doesn't exist
    $upload_dir = '../../uploads/applications/' . $application_id . '/';
    if (!is_dir($upload_dir)) {
        mkdir($upload_dir, 0755, true);
    }

    // Generate unique filename
    $file_extension = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = $document_type . '_' . time() . '_' . uniqid() . '.' . $file_extension;
    $file_path = $upload_dir . $filename;

    // Move uploaded file
    if (!move_uploaded_file($file['tmp_name'], $file_path)) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Failed to save file']);
        exit();
    }

    // Update application with document URL
    $document_url = '/uploads/applications/' . $application_id . '/' . $filename;
    $column_name = $document_type . '_url';
    
    $allowed_columns = ['business_plan_url', 'financial_projections_url', 'pitch_deck_url'];
    if (!in_array($column_name, $allowed_columns)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid document type']);
        exit();
    }

    $stmt = $pdo->prepare("UPDATE applications SET {$column_name} = ?, updated_at = NOW() WHERE id = ?");
    $stmt->execute([$document_url, $application_id]);

    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Document uploaded successfully',
        'url' => $document_url
    ]);

} catch (Exception $e) {
    error_log("Error in document upload: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Upload failed']);
}
?>
