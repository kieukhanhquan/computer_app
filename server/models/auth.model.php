<?php 
    class Auth {
        public function Login($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }
        public function Register($db, $query) {
            if (mysqli_query($db, $query)) {
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }

        public function DupUser($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }

        public function ForgetPassordStep1($db, $query){
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }
        public function ForgetPassordStep2($db, $query){
            if (mysqli_query($db, $query)) {
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }
    }

?>