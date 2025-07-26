<?php
// Proper CORS headers with correct Authorization case
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5174');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Credentials: true');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

// Add error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Use centralized database connection
require_once '../../config/db.php';

// Get user ID from Authorization header
$headers = getallheaders();
$userId = null;

if (isset($headers['Authorization'])) {
    $userId = str_replace('Bearer ', '', $headers['Authorization']);
} else {
    // For testing, use a default user ID
    $userId = 1;
}

try {
    // Get application statistics
    $stmt = $pdo->prepare("
        SELECT 
            COUNT(*) as total_applications,
            SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) as pending,
            SUM(CASE WHEN status = 'under_review' THEN 1 ELSE 0 END) as under_review,
            SUM(CASE WHEN status = 'approved' THEN 1 ELSE 0 END) as approved,
            SUM(CASE WHEN status = 'rejected' THEN 1 ELSE 0 END) as rejected,
            COALESCE(SUM(funding_amount), 0) as total_funding_requested,
            COALESCE(SUM(CASE WHEN status = 'approved' THEN funding_amount ELSE 0 END), 0) as total_funding_approved
        FROM applications 
        WHERE user_id = ?
    ");

    $stmt->execute([$userId]);
    $stats = $stmt->fetch(PDO::FETCH_ASSOC);

    // Convert to proper types
    $response = [
        'total_applications' => (int)$stats['total_applications'],
        'pending' => (int)$stats['pending'],
        'under_review' => (int)$stats['under_review'],
        'approved' => (int)$stats['approved'],
        'rejected' => (int)$stats['rejected'],
        'total_funding_requested' => (float)$stats['total_funding_requested'],
        'total_funding_approved' => (float)$stats['total_funding_approved']
    ];

    echo json_encode($response);

} catch(Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Query failed: ' . $e->getMessage()]);
}
?>
