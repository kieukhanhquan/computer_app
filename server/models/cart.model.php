<?php 
    class Cart {
        public function viewAll($db, $query) {
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

        public function addCart($db, $query) {
            if(mysqli_query($db, $query)) {
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }

        public function searchCart($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }

        public function sortCart($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }


        public function deleteCart($db, $query) {
            if(mysqli_query($db, $query)) {
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }
    }
?>