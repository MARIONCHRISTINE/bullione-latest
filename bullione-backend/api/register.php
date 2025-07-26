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
$required_fields = ['userType', 'accountType', 'firstName', 'lastName', 'email', 'password', 'phone', 'country', 'agreeToTerms'];

foreach ($required_fields as $field) {
    if (!isset($input[$field]) || (is_string($input[$field]) && empty(trim($input[$field])))) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => "Field '$field' is required"]);
        exit();
    }
}

// Validate email format
if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email format']);
    exit();
}

// Validate user type
if (!in_array($input['userType'], ['investor', 'applicant'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid user type. Must be "investor" or "applicant"']);
    exit();
}

// Validate account type
if (!in_array($input['accountType'], ['individual', 'organization'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid account type. Must be \"individual\" or \"organization\"']);
    exit();
}

// Validate password length
if (strlen($input['password']) < 8) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Password must be at least 8 characters long']);
    exit();
}

try {
    // Check if email already exists
    $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->execute([$input['email']]);
    if ($stmt->fetch()) {
        http_response_code(409);
        echo json_encode(['success' => false, 'error' => 'Email already registered']);
        exit();
    }
} catch (PDOException $e) {
    error_log("Database error during email check: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database error during email check']);
    exit();
}

// Hash password
$password_hash = password_hash($input['password'], PASSWORD_DEFAULT);

// Prepare data for insertion
$data = [
    'user_type' => $input['userType'],
    'account_type' => $input['accountType'],
    'first_name' => trim($input['firstName']),
    'last_name' => trim($input['lastName']),
    'email' => strtolower(trim($input['email'])),
    'password_hash' => $password_hash,
    'phone' => trim($input['phone']),
    'country' => $input['country'],
    'agree_to_terms' => $input['agreeToTerms'] ? 1 : 0,
    'status' => 'active',  // Set account as immediately active
    'is_active' => 1,      // Set active flag to 1
    'email_verified' => 1, // Set email as already verified
    'created_at' => date('Y-m-d H:i:s'),
    'updated_at' => date('Y-m-d H:i:s')
];

// Add optional fields for investors
if ($input['userType'] === 'investor') {
    if (isset($input['investmentExperience']) && !empty(trim($input['investmentExperience']))) {
        $data['investment_experience'] = $input['investmentExperience'];
    }
    if (isset($input['investmentAmount']) && !empty(trim($input['investmentAmount']))) {
        $data['investment_amount'] = $input['investmentAmount'];
    }
}

// Add optional fields for organizations
if ($input['accountType'] === 'organization') {
    if (isset($input['organizationName']) && !empty(trim($input['organizationName']))) {
        $data['organization_name'] = trim($input['organizationName']);
    }
    if (isset($input['organizationType']) && !empty(trim($input['organizationType']))) {
        $data['organization_type'] = $input['organizationType'];
    }
    if (isset($input['registrationNumber']) && !empty(trim($input['registrationNumber']))) {
        $data['registration_number'] = trim($input['registrationNumber']);
    }
}

// Insert user into database
try {
    $columns = implode(', ', array_keys($data));
    $placeholders = ':' . implode(', :', array_keys($data));
    
    $sql = "INSERT INTO users ($columns) VALUES ($placeholders)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($data);
    
    $user_id = $pdo->lastInsertId();
    
    // Return success response
    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => 'User registered successfully. You can now log in.',
        'user_id' => (int)$user_id,
        'user_type' => $input['userType'],
        'account_type' => $input['accountType'],
        'status' => 'active',
        'is_active' => true,
        'email_verified' => true
    ]);
    
} catch (PDOException $e) {
    error_log("Database error during registration: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Registration failed: Database error']);
}
?>
