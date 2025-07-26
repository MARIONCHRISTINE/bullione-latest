<?php
// Fixed CORS headers - note the capital A in Authorization
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5174');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, authorization, X-Requested-With');
header('Access-Control-Allow-Credentials: true');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

// Add error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Use centralized database connection and transformer
require_once '../../config/db.php';
require_once '../helpers/DataTransformer.php';

// Get user ID from Authorization header
$headers = getallheaders();
$userId = null;

if (isset($headers['Authorization'])) {
    $userId = str_replace('Bearer ', '', $headers['Authorization']);
} else {
    // For testing, use a default user ID
    $userId = 1;
}

$method = $_SERVER['REQUEST_METHOD'];
$path = $_SERVER['REQUEST_URI'];

try {
    switch ($method) {
        case 'GET':
            // Get all notifications for user
            $stmt = $pdo->prepare("SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC");
            $stmt->execute([$userId]);
            $notifications = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            $transformedNotifications = array_map([DataTransformer::class, 'transformNotification'], $notifications);
            echo json_encode($transformedNotifications);
            break;
            
        case 'POST':
            // Mark notification as read
            if (preg_match('/\/notifications\/(\d+)\/read$/', $path, $matches)) {
                $notificationId = $matches[1];
                
                $stmt = $pdo->prepare("UPDATE notifications SET is_read = 1 WHERE id = ? AND user_id = ?");
                $stmt->execute([$notificationId, $userId]);
                
                echo json_encode(['success' => true]);
            }
            break;
            
        default:
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
            break;
    }
} catch(Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}
?>
