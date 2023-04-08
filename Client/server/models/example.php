<?php
  require_once('../database/config.php');

  class Model {
    private $conn;

    function __construct() {
      $this->conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
      if ($this->conn->connect_error) {
        die("Connection failed: " . $this->conn->connect_error);
      }
    }

    function __destruct() {
      $this->conn->close();
    }

    function getProducts() {
      $sql = "SELECT * FROM products";
      $result = $this->conn->query($sql);
      $products = array();

      if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          $products[] = $row;
        }
        return $products;
    }
    
    function createOrder($customer_name, $customer_email, $products, $total) {
      $products_json = json_encode($products);
    
      $stmt = $this->conn->prepare("INSERT INTO orders (customer_name, customer_email, products, total, status) VALUES (?, ?, ?, ?, ?)");
      $stmt->bind_param("ssssi", $customer_name, $customer_email, $products_json, $total, $status);
    
      $status = 0;
      $stmt->execute();
      $stmt->close();
    }
    
    function updateOrderStatus($order_id, $status) {
      $stmt = $this->conn->prepare("UPDATE orders SET status = ? WHERE id = ?");
      $stmt->bind_param("ii", $status, $order_id);
    
      $stmt->execute();
      $stmt->close();
    }
    
    function getOrders() {
      $sql = "SELECT * FROM orders";
      $result = $this->conn->query($sql);
      $orders = array();
    
      if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
          $row['products'] = json_decode($row['products']);
          $orders[] = $row;
        }
      }
    
      return $orders;
    }
    
    function getOrder($order_id) {
      $stmt = $this->conn->prepare("SELECT * FROM orders WHERE id = ?");
      $stmt->bind_param("i", $order_id);
      $stmt->execute();
    
      $result = $stmt->get_result();
      $order = $result->fetch_assoc();
    
      if ($order) {
        $order['products'] = json_decode($order['products']);
        return $order;
      } else {
        return null;
      }
    }
    }
?>    