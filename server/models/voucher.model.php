<?php
    class Voucher {

        public function viewVoucher($db, $query) {
            $results = mysqli_query($db, $query);
            $results = $results->fetch_all(MYSQLI_ASSOC);
            return json_encode($results);
        }
        public function addVoucher($db, $query) {
            if (mysqli_query($db, $query)){
                return json_encode("Success");
            }
            else {
                return json_encode("Fail");
            }
        }

        public function deleteVoucher($db, $query) {
            if (mysqli_query($db, $query)){
                return json_encode("Success");
            }
            else {
                return json_encode("fail");
            }
        }

    }

?>