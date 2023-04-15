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
        public function viewProduct($db) {
            $query = "SELECT * FROM product";
            return $this->model->viewProduct($db, $query);
        }
        
        public function addProduct($db, $data) {
            $query =  "INSERT INTO product (Name, Type, Description, Quantity, Company, Image, Price) VALUES ('" . $data['Name'] . "','" . $data['Type'] . "','" . $data['Description'] . "'
            ," . $data['Quantity'] . ",'" . $data['Company'] . "','" . $data['Image'] . "'," . $data['Price'] . ")";
            return $this->model->addProduct($db, $query);
        }

        public function deleteProduct($db, $data) {
            $query =  "DELETE FROM product WHERE id=" .$data['id']. "";
            return $this->model->deleteProduct($db, $query);
        }

        public function searchProduct($db, $data) {
            $query = "SELECT *
            FROM Product
            WHERE Name LIKE '%". $data . "%'";
            return $this->model->searchProduct($db, $query);
        }
        public function updateProduct($db, $data) {
            $query =  "UPDATE product 
                    SET Type='". $data['Type'] . "',Description='" . $data['Description'] . "'
            , Company='" . $data['Company'] . "', Image='" . $data['Image'] . "', Price=" . $data['Price'] . "
            WHERE ID=".$data['ID']."";
            return $this->model->updateProduct($db, $query);
        }
        public function sortProduct($db, $data1, $data2, $data3) {
            $query = "";
            if (empty($data2) || empty($data2)){
                $query = "SELECT *
                FROM Product
                WHERE Name LIKE '%". $data1 . "%'";
            } else {
                $query = "SELECT *
                FROM Product
                WHERE Name LIKE '%". $data1 . "%'
                ORDER BY ". $data2 ." ".$data3."";
            }
            return $this->model->searchProduct($db, $query);
        }
    }
?>