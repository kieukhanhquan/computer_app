<?php 
    include "./models/contact.model.php";

    class ContactController {
        public $model;

        function __construct(){
            $this->model = new Contact();
        }

        public function viewContact($db) {
            $query = "SELECT * FROM contactinfor";
            return $this->model->viewContact($db, $query);
        }

        public function updateContact($db, $data) {
            $query =  "UPDATE contactinfor 
                    SET Name='". $data['Name'] . "',Address='" . $data['Address'] . "'
            , Email='" . $data['Email'] . "', Phone='" . $data['Phone'] . "', Facebook='" . $data['Facebook'] . "', 
            Youtube='" . $data['Youtube'] . "',Instagram='" . $data['Instagram'] . "',Twitter='" . $data['Twitter'] . "'
            WHERE ID=".$data['ID']."";
            return $this->model->updateContact($db, $query);
        }
    }
?>