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

        public function addtoCart($db,$data){
            $ProductID = $data["ProductID"];
            $CartID = $data["CartID"];
            $ClientID = $data["ClientID"];
            $quantity = $data["quantity"];
            $checker = "SELECT * FROM possess WHERE ProductID = '$ProductID'";
            $result = $this->model->viewAll($db, $checker);
            
            if (count(json_decode($result)) != 0) {
                return json_encode("Sản phẩm đã tồn tại trong giỏ hàng");
            }
            
            else {
            $query = "INSERT INTO possess (ProductID, CartID, ClientID, quantity)
            VALUES('$ProductID','$CartID','$ClientID','$quantity')";
            return $this->model->addtoCart($db, $query);
            }
        }
        public function deleteCartItem($db,$data){
            
            $ProductID = $data["ProductID"];
            
            $ClientID = $data["ClientID"];
            $query =   "DELETE FROM possess 
                        WHERE ProductID = $ProductID AND ClientID = $ClientID";
            return $this->model->deleteCartItem($db,$query);
        }

        public function clearCart($db,$data){
            $ClientID = $data["ClientID"];
            $query = "DELETE FROM possess WHERE ClientID = '$ClientID'" ;
            return $this->model->clearCart($db,$query);
        }
    }
?>