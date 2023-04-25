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

        public function orderSpecific($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }

        public function changeStatus($db, $query) {
            if (mysqli_query($db, $query)) {
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }

        
        public function updateProduct($db, $query) {
            if (mysqli_query($db, $query)) {
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }

    }


?>