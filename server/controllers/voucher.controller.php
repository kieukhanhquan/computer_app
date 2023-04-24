<?php 
    include "./models/voucher.model.php";

    class VoucherController {
        public $model;

        function __construct(){
            $this->model = new Voucher();
        }

        public function viewVoucher($db) {
            $query = "SELECT * FROM voucher";
            return $this->model->viewVoucher($db, $query);
        }
        
        public function addVoucher($db, $data) {
            $query =  "INSERT INTO voucher (Rate, Point) VALUES ('" . $data['rate'] .  "','".$data['point']. "') ";
            return $this->model->addVoucher($db, $query);
        }

        public function deleteVoucher($db, $data) {
            $query =  "DELETE FROM voucher WHERE id=$data ";
            return $this->model->deleteVoucher($db, $query);
        }
    }
?>