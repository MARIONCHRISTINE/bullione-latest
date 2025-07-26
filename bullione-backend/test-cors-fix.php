<?php
// Test the exact CORS fix
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5174');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, authorization, X-Requested-With');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(['message' => 'CORS preflight successful with both Authorization cases']);
    exit(0);
}

// Test both header cases
$headers = getallheaders();
$authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? 'Not provided';

echo json_encode([
    'status' => 'success',
    'message' => 'CORS fixed - both Authorization cases allowed!',
    'method' => $_SERVER['REQUEST_METHOD'],
    'authorization_header' => $authHeader,
    'headers_received' => array_keys($headers)
]);
?>
