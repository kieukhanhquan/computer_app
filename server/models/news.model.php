<?php 
    class News {

        public function viewNews($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }
        
        public function addNews($db, $query) {
            if (mysqli_query($db, $query)){
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }

        public function deleteNews($db, $query) {
            if (mysqli_query($db, $query)){
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }

        public function updateNews($db, $query) {
            if (mysqli_query($db, $query)){
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }
        public function searchNews($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }
    }

?>