<?php 
    include "./models/clients.model.php";

    class ClientController {
        public $model;

        function __construct(){
            $this->model = new Client();
        }

        public function viewAll($db) {
            $query = "SELECT * FROM client";
            return $this->model->viewAll($db, $query);
        }

        
        public function getClient($db, $data) {
            $query = "SELECT * FROM client
            WHERE ID=".$data."";
            return $this->model->getClient($db, $query);
        }

        public function changeStatus($db , $data) {
            $query = "UPDATE client SET Status= '" . $data["Status"] . "' WHERE ID='" . $data["ID"] ."'";
            return $this->model->changeStatus($db, $query);
        }

        public function addClient($db, $data) {
            $UserName = $data["UserName"];
            $Password = $data["Password"];
            $FirstName = $data["FirstName"];
            $LastName = $data["LastName"];
            $DayOfBirth = $data["DayOfBirth"];
            $PhoneNumber = $data["PhoneNumber"];
            $Email = $data["Email"];
            $Avatar = $data["Avatar"];
            $checker = "SELECT * FROM client WHERE UserName = '$UserName'";
            $result = $this->model->viewAll($db, $checker);

            if (count(json_decode($result)) != 0) {
                return json_encode("Tên tài khoản đã tồn tại");
            }
            
            else {
            $query = "INSERT INTO client (UserName, Password, FirstName, LastName, DayOfBirth, PhoneNumber, Email, Avatar, Type, Grade, Status)
            VALUES('$UserName','$Password','$FirstName','$LastName','$DayOfBirth','$PhoneNumber','$Email','$Avatar', '2000000', '1', 'Hoạt động')";
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

        public function updateUser($db , $data) {
            $ID = $data["ID"];
            $FirstName = $data["FirstName"];
            $LastName = $data["LastName"];
            $DayOfBirth = $data["DayOfBirth"];
            $PhoneNumber = $data["PhoneNumber"];
            $Email = $data["Email"];
            $Avatar = $data["Avatar"];
            $query = "UPDATE client SET FirstName='$FirstName', LastName='$LastName', DayOfBirth='$DayOfBirth',PhoneNumber='$PhoneNumber', Email='$Email', Avatar='$Avatar' WHERE ID = '$ID' ";
            return $this->model->updateUser($db, $query);
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