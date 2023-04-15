<?php 
    class Client {
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

        public function addClient($db, $query) {
            if(mysqli_query($db, $query)) {
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }

        public function searchClient($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }

        public function sortClient($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }

        public function updateUser($db, $query) {
            if (mysqli_query($db, $query)) {
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }

        public function deleteClient($db, $query) {
            if(mysqli_query($db, $query)) {
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }
    }
?>