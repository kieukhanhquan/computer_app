<?php
    include "./models/product.model.php";


    class ProductController {
        public $model;

        function __construct()
        {
            $this->model = new Product();
        }

        public function viewAll($db) {
            $query = "SELECT * FROM product";
            return $this->model->viewAll($db,$query);
        }
    }
?>