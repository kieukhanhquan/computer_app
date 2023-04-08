<?php
  require_once('./controller/controller.php');

  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: http://localhost:3000');
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  header('Access-Control-Allow-Headers: Content-Type');

  $controller = new Controller();

  switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        if (isset($_GET['products'])) {
          $result = $controller->getProducts();
          echo json_encode($result);
        } elseif (isset($_GET['orders'])) {
          $result = $controller->getOrders();
          echo json_encode($result);
        } elseif (isset($_GET['order_id'])) {
          $order_id = $_GET['order_id'];
          $result = $controller->getOrder($order_id);
          echo json_encode($result);
        }
        break;
      
      case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $result = $controller->createOrder($data);
        echo json_encode($result);
        break;
      
      case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        $result = $controller->updateOrderStatus($data);
        echo json_encode($result);
        break;
      
      default:
        http_response_code(405);
        echo json_encode(array('message' => 'Method not allowed'));
        break;
    }
?>