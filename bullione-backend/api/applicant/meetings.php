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
    // Get all meetings for user (as applicant)
    $stmt = $pdo->prepare("
        SELECT m.*, u.first_name, u.last_name 
        FROM meetings m 
        LEFT JOIN users u ON m.investor_id = u.id 
        WHERE m.applicant_id = ? 
        ORDER BY m.meeting_date ASC, m.meeting_time ASC
    ");
    $stmt->execute([$userId]);
    $meetings = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Transform meetings to match frontend expectations
    $transformedMeetings = [];
    foreach ($meetings as $meeting) {
        $transformedMeetings[] = [
            'id' => $meeting['id'],
            'title' => $meeting['title'],
            'meeting_date' => $meeting['meeting_date'],
            'meeting_time' => $meeting['meeting_time'],
            'type' => $meeting['type'],
            'meeting_link' => $meeting['meeting_link'],
            'status' => $meeting['status'],
            'investor_name' => ($meeting['first_name'] && $meeting['last_name']) 
                ? $meeting['first_name'] . ' ' . $meeting['last_name'] 
                : 'TBD'
        ];
    }
    
    echo json_encode($transformedMeetings);

} catch(Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}
?>
