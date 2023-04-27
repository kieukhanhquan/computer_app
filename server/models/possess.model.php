<?php
    class Possess {
        public function viewAll($db,$query){
            $result = mysqli_query($db,$query);
            $result = $result->fetch_all(MYSQLI_ASSOC);
            return json_encode($result);
        }

        public function filterPossess($db,$query){
            $result = mysqli_query($db,$query);
            $result = $result->fetch_all(MYSQLI_ASSOC);
            return json_encode($result);
        }

        public function updateQuantity($db,$query){
            if(mysqli_query($db,$query)){
                return json_decode("Success");
            }
            else{
                return json_decode("fail");
            }
        }

        public function addtoCart($db,$query){
            if(mysqli_query($db, $query)) {
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }
        
        public function deleteCartItem($db,$query){
            if(mysqli_query($db, $query)) {
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }

        public function clearCart($db,$query){
            if(mysqli_query($db, $query)) {
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }
    }

?>