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
            if (preg_match('/\/applications\/(\d+)$/', $path, $matches)) {
                // Get single application
                $applicationId = $matches[1];
                $stmt = $pdo->prepare("SELECT * FROM applications WHERE id = ? AND user_id = ?");
                $stmt->execute([$applicationId, $userId]);
                $application = $stmt->fetch(PDO::FETCH_ASSOC);
                
                if ($application) {
                    echo json_encode(DataTransformer::transformApplication($application));
                } else {
                    http_response_code(404);
                    echo json_encode(['error' => 'Application not found']);
                }
            } else {
                // Get all applications for user
                $stmt = $pdo->prepare("SELECT * FROM applications WHERE user_id = ? ORDER BY created_at DESC");
                $stmt->execute([$userId]);
                $applications = $stmt->fetchAll(PDO::FETCH_ASSOC);
                
                $transformedApplications = array_map([DataTransformer::class, 'transformApplication'], $applications);
                echo json_encode($transformedApplications);
            }
            break;
            
        case 'POST':
            // Create new application
            $input = json_decode(file_get_contents('php://input'), true);
            
            $stmt = $pdo->prepare("
                INSERT INTO applications (user_id, company_name, funding_amount, description, status, created_at, updated_at) 
                VALUES (?, ?, ?, ?, 'pending', NOW(), NOW())
            ");
            
            $stmt->execute([
                $userId,
                $input['company_name'],
                $input['funding_amount'],
                $input['description'] ?? null
            ]);
            
            $applicationId = $pdo->lastInsertId();
            
            // Fetch the created application
            $stmt = $pdo->prepare("SELECT * FROM applications WHERE id = ?");
            $stmt->execute([$applicationId]);
            $application = $stmt->fetch(PDO::FETCH_ASSOC);
            
            echo json_encode(DataTransformer::transformApplication($application));
            break;
            
        case 'PUT':
            // Update application
            if (preg_match('/\/applications\/(\d+)$/', $path, $matches)) {
                $applicationId = $matches[1];
                $input = json_decode(file_get_contents('php://input'), true);
                
                $stmt = $pdo->prepare("
                    UPDATE applications 
                    SET company_name = ?, funding_amount = ?, description = ?, updated_at = NOW()
                    WHERE id = ? AND user_id = ?
                ");
                
                $stmt->execute([
                    $input['company_name'],
                    $input['funding_amount'],
                    $input['description'] ?? null,
                    $applicationId,
                    $userId
                ]);
                
                // Fetch updated application
                $stmt = $pdo->prepare("SELECT * FROM applications WHERE id = ?");
                $stmt->execute([$applicationId]);
                $application = $stmt->fetch(PDO::FETCH_ASSOC);
                
                echo json_encode(DataTransformer::transformApplication($application));
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
