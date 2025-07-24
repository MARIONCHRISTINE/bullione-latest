<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require_once '../config/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    try {
        $stmt = $conn->prepare("
            UPDATE services 
            SET title = ?, description = ?, icon = ?, link = ?, features = ?, minInvestment = ?, expectedReturn = ?, riskLevel = ?, category = ?, sector = ?, type = ?
            WHERE id = ?
        ");
        
        $stmt->execute([
            $input['title'],
            $input['description'],
            $input['icon'],
            $input['link'],
            json_encode($input['features']),
            $input['minInvestment'],
            $input['expectedReturn'],
            $input['riskLevel'],
            $input['category'],
            $input['sector'],
            $input['type'],
            $input['id']
        ]);
        
        echo json_encode(["success" => true, "message" => "Service updated successfully"]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
?>
