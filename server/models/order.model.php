<?php 
    class Order {

        public function viewAll($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }

        public function filterOrder($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }


        public function searchOrder($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }

        
        public function orderDetail($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }
    }


?>