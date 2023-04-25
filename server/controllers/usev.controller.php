<?php
    include "./models/usev.model.php";

    class UsevController {
        public $model;

        function __construct()
        {
            $this->model = new Usev();
        }

        public function filterUsev($db,$data){
            $query = "SELECT * 
            FROM usev 
            JOIN voucher
            ON usev.VoucherID = voucher.ID
            WHERE ClientID = '$data' ";
            return $this->model->filterUsev($db,$query);
        }
    }


?>