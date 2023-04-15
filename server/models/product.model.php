<?php
    class Product {
        public function viewAll($db, $query){
            $result = mysqli_query($db,$query);
            $result = $result->fetch_all(MYSQLI_ASSOC);
            return json_encode($result);
        }
        public function viewProduct($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }
        
        public function addProduct($db, $query) {
            if (mysqli_query($db, $query)){
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }

        public function deleteProduct($db, $query) {
            if (mysqli_query($db, $query)){
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }

        public function updateProduct($db, $query) {
            if (mysqli_query($db, $query)){
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }
        public function searchProduct($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }
        public function sortProduct($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }
    }

?>