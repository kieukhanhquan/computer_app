<?php
            include "./models/statistic.model.php";

            class StatisticController {
                public $model;
        
                function __construct(){
                    $this->model = new Statistic();
                }

                public function Revenue($db, $data) {
                    $Year = $data;
                    $query = "SELECT MONTH( Timeconfirm) AS Monthly, SUM(OrderFee) AS OrderFee, SUM(OrderShip) AS OrderShip  
                    FROM orderp 
                    WHERE YEAR(Timeconfirm) = '$Year' AND OrderState = 'Đã xác nhận' 
                    GROUP BY MONTH( Timeconfirm) 
                    ORDER BY  MONTH( Timeconfirm)
                    ";
                    return $this->model->Revenue($db, $query);
                }

                public function ProductType($db, $data) {
                    $Year = $data;
                    $query = "SELECT product.Type, SUM(belong.Quantity) AS Quantity
                    FROM orderp, product, belong 
                    WHERE YEAR(Timeconfirm) = '$Year' AND OrderState = 'Đã xác nhận' AND ProductID = product.ID AND OrderID = orderp.ID
                    GROUP BY product.Type
                    ORDER BY  product.Type
                    ";
                    return $this->model->Revenue($db, $query);
                }


            }

            

?>