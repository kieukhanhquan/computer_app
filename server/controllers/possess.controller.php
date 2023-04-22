<?php
    include "./models/possess.model.php";

    class PossessController{
        public $model;

        function __construct(){
            $this->model = new Possess();
        }
        
        public function viewAll($db){
            $query = "SELECT * FROM possess";
            return $this->model->viewAll($db,$query);
        }

        public function filterPossess($db,$data){
            $query = "SELECT * FROM possess WHERE ClientID = '$data'";
            return $this->model->filterPossess($db,$query);
        }
    }
?>