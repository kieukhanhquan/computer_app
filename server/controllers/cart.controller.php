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

        public function getUserCart($db, $data) {
            $query = "SELECT * FROM cart WHERE ClientID='$data'";
            return $this->model->getUserCart($db, $query);
        }

        public function addCart($db, $data) {
            $ClientID = $data["ClientID"];
            
            $checker = "SELECT * FROM cart WHERE ClientID = '$ClientID'";
            $result = $this->model->viewAll($db, $checker);

            if (count(json_decode($result)) != 0) {
                // tăng 1 
            }
            
            else {
            $query = "INSERT INTO Cart (ClientID)
            VALUES('$ClientID','$Password','$FirstName','$LastName','$DayOfBirth','$PhoneNumber','$Email','$Avatar', '2000000', '1', 'Hoạt động')";
            return $this->model->addClient($db, $query);
            }
        }

        public function searchClient($db, $data) {
            $keySearch = $data;
            $query = "SELECT * FROM client WHERE FirstName LIKE '%$keySearch%' OR LastName LIKE '%$keySearch%'";
            return $this->model->viewAll($db, $query);
        }

        public function sortClient($db, $data) {
            $query = "SELECT * FROM client ORDER BY $data";
            return $this->model->sortClient($db, $query);
        }


        public function deleteClient($db, $data) {
            $ID = $data["ID"];
            $query = "DELETE FROM client WHERE ID=$ID";
            return $this->model->deleteClient($db, $query);
        }

        public function updateGrade($db, $data) {
            $ID = $data["ID"];
            $grade = round($data["Grade"]/1000);
            $query = "UPDATE client SET Grade= Grade + '$grade ' WHERE ID='$ID'";
            return $this->model->changeStatus($db, $query);
        }
    }
?>