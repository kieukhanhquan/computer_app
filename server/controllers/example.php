
<!-- File `controller` để điều khiển xử lý các yêu cầu API từ client: -->


<?php
  require_once('model.php');

  class Controller {
    private $model;

    function __construct() {
      $this->model = new Model();
    }

    function __destruct() {
      $this->model = null;
    }

    function getProducts() {
      return $this->model->getProducts();
    }

    function createOrder($data) {
      $customer_name = $data['customer_name'];
      $customer_email = $data['customer_email'];
      $products = $data['products'];
      $total = $data['total'];

      return $this->model->createOrder($customer_name, $customer_email, $products, $total);
    }

    function updateOrderStatus($data) {
      $order_id = $data['order_id'];
      $status = $data['status'];

      return $this->model->updateOrderStatus($order_id, $status);
    }

    function getOrders() {
      return $this->model->getOrders();
    }

    function getOrder($order_id) {
      return $this->model->getOrder($order_id);
    }
  }
?>
