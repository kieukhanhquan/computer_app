<?php
            include "./models/order.model.php";

            class OrderController {
                public $model;
        
                function __construct(){
                    $this->model = new Order();
                }

                public function viewAll($db) {
                    $query = "SELECT * FROM orderp";
                    return $this->model->viewAll($db, $query);
                }

                public function filterOrder($db, $data) {
                    $query = "SELECT * FROM orderp WHERE OrderState='$data'";
                    return $this->model->filterOrder($db, $query);
                }

                public function searchOrder($db, $data) {
                    $ID = $data["ID"];
                    $ClientID = $data["ClientID"];
                    $query = "SELECT * FROM orderp WHERE ID LIKE '%$ID%' AND CientID LIKE '%$ClientID%'";
                    return $this->model->searchOrder($db, $query);
                }

                public function orderDetail($db, $data) {
                    $orderID = $data["orderID"];
                    $query = "SELECT ProductID, Name, Type, Price, belong.Quantity
                    FROM belong, product
                    WHERE ID=ProductID  AND OrderID='$orderID'";
                    return $this->model->orderDetail($db, $query);
                }

            }

?>