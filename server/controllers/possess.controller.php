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
            $query = "SELECT * FROM possess 
                                JOIN product 
                                ON possess.ProductID = product.ID 
                                WHERE ClientID = '$data'";
            return $this->model->filterPossess($db,$query);
        }

        public function updateQuantity($db,$data){
            $ProductID = $data["ProductID"];
            $quantity = $data["quantity"];
            $query = "UPDATE possess SET quantity='$quantity' WHERE ProductID='$ProductID'";
            return $this->model->updateQuantity($db,$query);
        }
    }
?>