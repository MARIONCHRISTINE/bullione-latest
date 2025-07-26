<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set content type
header('Content-Type: text/html; charset=utf-8');

echo "<h1>🔧 Database Setup for db_bullione</h1>";

// Database configuration
$host = 'localhost';
$dbname = 'db_bullione';
$username = 'root';
$password = '';

try {
    // Step 1: Connect to MySQL server (without database)
    echo "<h2>Step 1: Connecting to MySQL Server</h2>";
    $pdo_server = new PDO("mysql:host=$host;charset=utf8", $username, $password);
    $pdo_server->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "✅ Connected to MySQL server<br>";

    // Step 2: Create database if it doesn't exist
    echo "<h2>Step 2: Creating Database</h2>";
    $pdo_server->exec("CREATE DATABASE IF NOT EXISTS `$dbname` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    echo "✅ Database '$dbname' created or already exists<br>";

    // Step 3: Connect to the specific database
    echo "<h2>Step 3: Connecting to Database</h2>";
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    echo "✅ Connected to database '$dbname'<br>";

    // Step 4: Create users table
    echo "<h2>Step 4: Creating Users Table</h2>";
    $createTableSQL = "
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_type ENUM('investor', 'applicant') NOT NULL,
        account_type ENUM('individual', 'organization') NOT NULL,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        country VARCHAR(100) NOT NULL,
        investment_experience ENUM('beginner', 'intermediate', 'advanced', 'professional') NULL,
        investment_amount VARCHAR(50) NULL,
        organization_name VARCHAR(255) NULL,
        organization_type VARCHAR(100) NULL,
        registration_number VARCHAR(100) NULL,
        agree_to_terms BOOLEAN DEFAULT FALSE,
        reset_token VARCHAR(64) NULL,
        reset_token_expires DATETIME NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        email_verified BOOLEAN DEFAULT FALSE,
        status ENUM('active', 'inactive', 'pending') DEFAULT 'active',
        INDEX idx_email (email),
        INDEX idx_user_type (user_type),
        INDEX idx_reset_token (reset_token),
        INDEX idx_status (status)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ";

    $pdo->exec($createTableSQL);
    echo "✅ Users table created successfully<br>";

    // Step 5: Test table structure
    echo "<h2>Step 5: Verifying Table Structure</h2>";
    $stmt = $pdo->query("DESCRIBE users");
    $columns = $stmt->fetchAll();
    echo "<table border='1' style='border-collapse: collapse; margin: 10px 0;'>";
    echo "<tr><th>Field</th><th>Type</th><th>Null</th><th>Key</th><th>Default</th></tr>";
    foreach ($columns as $column) {
        echo "<tr>";
        echo "<td>{$column['Field']}</td>";
        echo "<td>{$column['Type']}</td>";
        echo "<td>{$column['Null']}</td>";
        echo "<td>{$column['Key']}</td>";
        echo "<td>{$column['Default']}</td>";
        echo "</tr>";
    }
    echo "</table>";

    // Step 6: Test insert and select
    echo "<h2>Step 6: Testing Database Operations</h2>";
    
    // Test insert
    $testData = [
        'user_type' => 'investor',
        'account_type' => 'individual',
        'first_name' => 'Test',
        'last_name' => 'User',
        'email' => 'test@example.com',
        'password_hash' => password_hash('testpassword', PASSWORD_DEFAULT),
        'phone' => '+1234567890',
        'country' => 'US',
        'agree_to_terms' => 1
    ];

    // Check if test user already exists
    $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->execute([$testData['email']]);
    $existingUser = $stmt->fetch();

    if (!$existingUser) {
        $columns = implode(', ', array_keys($testData));
        $placeholders = ':' . implode(', :', array_keys($testData));
        $sql = "INSERT INTO users ($columns) VALUES ($placeholders)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute($testData);
        echo "✅ Test user inserted successfully<br>";
        
        // Clean up test user
        $pdo->prepare("DELETE FROM users WHERE email = ?")->execute([$testData['email']]);
        echo "✅ Test user cleaned up<br>";
    } else {
        echo "✅ Database insert/select operations working (test user already exists)<br>";
    }

    // Step 7: Final verification
    echo "<h2>Step 7: Final Verification</h2>";
    $stmt = $pdo->query("SELECT COUNT(*) as count FROM users");
    $result = $stmt->fetch();
    echo "✅ Users table accessible. Total users: {$result['count']}<br>";

    echo "<h2>🎉 Database Setup Complete!</h2>";
    echo "<p style='color: green; font-weight: bold;'>Your database is ready for use!</p>";
    echo "<p><a href='../api/test-connection.php'>Test Connection</a> | <a href='../api/register.php'>Test Registration</a></p>";

} catch (PDOException $e) {
    echo "<h2 style='color: red;'>❌ Database Setup Failed</h2>";
    echo "<p style='color: red;'>Error: " . $e->getMessage() . "</p>";
    echo "<p>Please check:</p>";
    echo "<ul>";
    echo "<li>XAMPP MySQL service is running</li>";
    echo "<li>Database credentials are correct</li>";
    echo "<li>MySQL port is accessible (default: 3306)</li>";
    echo "</ul>";
}
?>
