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

        public function changeStatus($db , $data) {
            $query = "UPDATE client SET Status= '" . $data["Status"] . "' WHERE id='" . $data["ID"] ."'";
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
            $query = "INSERT INTO client (UserName, Password, FirstName, LastName, DayOfBirth, PhoneNumber, Email, Avatar, Type, Grade, 	Status)
            VALUES('$UserName','$Password','$FirstName','$FirstName','$LastName','$DayOfBirth','$PhoneNumber','$Email','$Avatar', '2000000', '1', 'Hoạt động')";
            return $this->model->addClient($db, $query);
        }
    }
?>