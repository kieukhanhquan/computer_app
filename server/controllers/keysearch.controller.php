<?php 
    include "./models/keysearch.model.php";

    class KeySearchController {
        public $model;

        function __construct(){
            $this->model = new KeySearch();
        }

        public function viewKeySearch($db) {
            $query = "SELECT * FROM keysearch";
            return $this->model->viewKeySearch($db, $query);
        }
        
        public function addKeySearch($db, $data) {
            $query =  "INSERT INTO keysearch (Name) VALUES ('" . $data .  "') ";
            return $this->model->addKeySearch($db, $query);
        }

        public function deleteKeySearch($db, $data) {
            $query =  "DELETE FROM keysearch WHERE id=$data ";
            return $this->model->deleteKeySearch($db, $query);
        }
    }
?>