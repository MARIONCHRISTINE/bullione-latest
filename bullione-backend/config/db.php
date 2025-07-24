<?php
$host = "localhost";
$dbname = "bullione_db";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Optional: set charset to UTF-8
    $conn->exec("SET NAMES 'utf8'");
    // echo "Connected successfully"; // You can uncomment this for testing
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    exit;
}
?>
