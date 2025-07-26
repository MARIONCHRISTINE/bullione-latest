<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set content type
header('Content-Type: text/html; charset=utf-8');

echo "<h1>🔍 Database Connection Test for db_bullione</h1>";

// Test 1: Check if config file exists
if (file_exists('../config/db.php')) {
    echo "✅ Database config file found<br>";
} else {
    echo "❌ Database config file not found<br>";
    exit;
}

// Test 2: Include config file
try {
    require_once '../config/db.php';
    echo "✅ Database config loaded<br>";
} catch (Exception $e) {
    echo "❌ Error loading config: " . $e->getMessage() . "<br>";
    exit;
}

// Test 3: Check if PDO object exists
if (isset($pdo)) {
    echo "✅ PDO object created<br>";
} else {
    echo "❌ PDO object not created<br>";
    exit;
}

// Test 4: Test database query
try {
    $stmt = $pdo->query("SELECT 1 as test");
    $result = $stmt->fetch();
    if ($result['test'] == 1) {
        echo "✅ Database query successful<br>";
    }
} catch (PDOException $e) {
    echo "❌ Database query failed: " . $e->getMessage() . "<br>";
    exit;
}

// Test 5: Check if users table exists
try {
    $stmt = $pdo->query("SHOW TABLES LIKE 'users'");
    $table = $stmt->fetch();
    if ($table) {
        echo "✅ Users table exists<br>";
    } else {
        echo "❌ Users table does not exist<br>";
        echo "<p><a href='../setup/database-setup.php'>Run Database Setup</a></p>";
        exit;
    }
} catch (PDOException $e) {
    echo "❌ Error checking users table: " . $e->getMessage() . "<br>";
    exit;
}

// Test 6: Test users table access
try {
    $stmt = $pdo->query("SELECT COUNT(*) as count FROM users");
    $result = $stmt->fetch();
    echo "✅ Users table accessible. Total users: {$result['count']}<br>";
} catch (PDOException $e) {
    echo "❌ Error accessing users table: " . $e->getMessage() . "<br>";
    exit;
}

// Display database info
echo "<h2>Database Information:</h2>";
echo "Database: db_bullione<br>";

echo "<h2>🎉 All Tests Passed!</h2>";
echo "<p style='color: green;'>Your database connection is working perfectly!</p>";

echo "<h2>Next Steps:</h2>";
echo "<ul>";
echo "<li><a href='register.php'>Test Registration API</a></li>";
echo "<li><a href='login.php'>Test Login API</a></li>";
echo "<li><a href='reset-password.php'>Test Reset Password API</a></li>";
echo "</ul>";

echo "<p><small>If you see errors above, run the database setup first!</small></p>";
?>
