<?php
    class Product {
        public function viewAll($db, $query){
            $result = mysqli_query($db,$query);
            $result = $result->fetch_all(MYSQLI_ASSOC);
            return json_encode($result);
        }
        public function addProduct($db,$query){
            $result = mysqli_query($db,$query);
            if($result){
                return json_encode("Success");
            }
            else{
                return json_encode("fail");
            }
            
        }
    }

?>