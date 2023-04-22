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

        

        public function addCart($db, $data) {
            $ClientID = $data["ClientID"];
            
            $checker = "SELECT * FROM cart WHERE ClientID = '$ClientID'";
            $result = $this->model->viewAll($db, $checker);

            if (count(json_decode($result)) != 0) {
                // tăng 1 
            }
            
        }

        public function searchClient($db, $data) {
            $keySearch = $data;
            $query = "SELECT * FROM client WHERE FirstName LIKE '%$keySearch%' OR LastName LIKE '%$keySearch%'";
            return $this->model->viewAll($db, $query);
        }

        public function sortClient($db, $data) {
            $query = "SELECT * FROM client ORDER BY $data";
            return $this->model->sortCart($db, $query);
        }


        public function deleteCart($db, $data) {
            $ID = $data["ID"];
            $query = "DELETE FROM client WHERE ID=$ID";
            return $this->model->deleteCart($db, $query);
        }

        public function updateGrade($db, $data) {
            $ID = $data["ID"];
            $grade = round($data["Grade"]/1000);
            $query = "UPDATE client SET Grade= Grade + '$grade ' WHERE ID='$ID'";
            return $this->model->changeStatus($db, $query);
        }
    }
?>