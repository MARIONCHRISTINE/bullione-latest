<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
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

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. Use GET.']);
    exit();
}

try {
    // Get optional query parameters for filtering
    $category = $_GET['category'] ?? null;
    $sector = $_GET['sector'] ?? null;
    $type = $_GET['type'] ?? null;
    $limit = isset($_GET['limit']) && is_numeric($_GET['limit']) ? (int)$_GET['limit'] : null;
    $offset = isset($_GET['offset']) && is_numeric($_GET['offset']) ? (int)$_GET['offset'] : 0;
    
    // Build query with optional filters
    $sql = "SELECT * FROM services WHERE 1=1";
    $params = [];
    
    if ($category) {
        $sql .= " AND category = ?";
        $params[] = $category;
    }
    
    if ($sector) {
        $sql .= " AND sector = ?";
        $params[] = $sector;
    }
    
    if ($type) {
        $sql .= " AND type = ?";
        $params[] = $type;
    }
    
    // Add ordering
    $sql .= " ORDER BY type, title";
    
    // Add limit and offset if specified
    if ($limit) {
        $sql .= " LIMIT ?";
        $params[] = $limit;
        
        if ($offset > 0) {
            $sql .= " OFFSET ?";
            $params[] = $offset;
        }
    }
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $services = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Process the results to decode JSON fields
    foreach ($services as &$service) {
        if ($service['features']) {
            $service['features'] = json_decode($service['features'], true);
        }
        
        // Convert numeric fields to proper types
        if ($service['minInvestment']) {
            $service['minInvestment'] = (float)$service['minInvestment'];
        }
        
        if ($service['expectedReturn']) {
            $service['expectedReturn'] = (float)$service['expectedReturn'];
        }
        
        // Convert ID to integer
        $service['id'] = (int)$service['id'];
    }
    
    // Get total count for pagination (if filters are applied)
    $countSql = "SELECT COUNT(*) as total FROM services WHERE 1=1";
    $countParams = [];
    
    if ($category) {
        $countSql .= " AND category = ?";
        $countParams[] = $category;
    }
    
    if ($sector) {
        $countSql .= " AND sector = ?";
        $countParams[] = $sector;
    }
    
    if ($type) {
        $countSql .= " AND type = ?";
        $countParams[] = $type;
    }
    
    $countStmt = $pdo->prepare($countSql);
    $countStmt->execute($countParams);
    $totalCount = $countStmt->fetch()['total'];
    
    // Return success response
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'data' => $services,
        'total' => (int)$totalCount,
        'count' => count($services),
        'filters' => [
            'category' => $category,
            'sector' => $sector,
            'type' => $type,
            'limit' => $limit,
            'offset' => $offset
        ]
    ]);
    
} catch (PDOException $e) {
    error_log("Database error during services retrieval: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to retrieve services: Database error']);
}
?>
