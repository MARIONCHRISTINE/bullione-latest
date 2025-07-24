<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once "../config/db.php";

try {
  $stmt = $pdo->query("SELECT * FROM services");
  $services = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($services);
} catch (PDOException $e) {
  echo json_encode(["error" => $e->getMessage()]);
}
?>
