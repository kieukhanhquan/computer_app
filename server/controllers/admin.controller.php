<?php 
    include "./models/admin.model.php";

    class AdminController {
        public $model;

        function __construct(){
            $this->model = new Admin();
        }

        public function viewAll($db, $data) {
            $query = "SELECT * FROM admin WHERE ID='$data'";
            return $this->model->viewAll($db, $query);
        }
        public function updateAdmin($db , $data) {
            $ID = $data["ID"];
            $FirstName = $data["FirstName"];
            $LastName = $data["LastName"];
            $PhoneNumber = $data["PhoneNumber"];
            $Avatar = $data["Avatar"];
            $query = "UPDATE admin SET FirstName='$FirstName', LastName='$LastName', PhoneNumber='$PhoneNumber',  Avatar='$Avatar' WHERE ID = '$ID' ";
            return $this->model->updateAdmin($db, $query);
        }

    }
?>