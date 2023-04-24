<?php 
    include "./models/cart.model.php";

    class CartController {
        public $model;

        function __construct(){
            $this->model = new Cart();
        }

        public function viewAll($db) {
            $query = "SELECT * FROM cart";
            return $this->model->viewAll($db, $query);
        }

        

        
    }
?>