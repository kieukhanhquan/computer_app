<?php
    class Product {
        public function viewAll($db, $query){
            $result = mysqli_query($db,$query);
            $result = $result->fetch_all(MYSQLI_ASSOC);
            return json_encode($result);
        }
    }

?>