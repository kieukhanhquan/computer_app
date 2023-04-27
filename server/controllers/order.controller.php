<?php
            include "./models/order.model.php";

            class OrderController {
                public $model;
        
                function __construct(){
                    $this->model = new Order();
                }

                public function viewAll($db) {
                    $query = "SELECT * FROM orderp ORDER BY TimeCreate	DESC";
                    return $this->model->viewAll($db, $query);
                }

                public function filterOrder($db, $data) {
                    $query = "SELECT * FROM orderp WHERE OrderState='$data'";
                    return $this->model->filterOrder($db, $query);
                }

                public function searchOrder($db, $data) {
                    $ID = $data["ID"];
                    $ClientID = $data["ClientID"];
                    $query = "SELECT * FROM orderp WHERE ID LIKE '%$ID%' AND CientID LIKE '%$ClientID%'";
                    return $this->model->searchOrder($db, $query);
                }

                public function orderDetail($db, $data) {
                    $orderID = $data["orderID"];
                    $query = "SELECT ProductID, Name, Type, Price, belong.Quantity
                    FROM belong, product
                    WHERE ID=ProductID  AND OrderID='$orderID'";
                    return $this->model->orderDetail($db, $query);
                }

                public function orderSpecific($db, $data) {
                    $orderID = $data;
                    $query = "SELECT * FROM orderp WHERE ID='$orderID'";
                    return $this->model->orderSpecific($db, $query);
                }

                public function changeStatus($db, $data) {
                    $orderID = $data["ID"];
                    $status = $data["Status"];
                    $date = $data["Date"];
                    $admin = $data["Admin"];
                    $query = "UPDATE orderp SET OrderState='$status', AdminID='$admin', TimeConfirm='$date' WHERE ID='$orderID'";
                    return $this->model->changeStatus($db, $query);
                }

                public function updateProduct($db, $data) {
                    $orderID = $data;
                    $query = "UPDATE product 
                                INNER JOIN belong ON product.ID = belong.ProductID and belong.OrderID = '$orderID' 
                                SET product.Quantity =  product.Quantity - belong.Quantity";
                    return $this->model->updateProduct($db, $query);
                }
                
                public function addOrder($db,$data){
                    $ClientID = $data["ClientID"];
                    $Address1 = mysqli_real_escape_string($db, $data["Address"]);
                    $PayType = $data["PayType"];
                    $OrderFee = $data["OrderFee"];
                    $OrderState = $data["OrderState"];
                    $OrderShip = $data["OrderShip"];
                    $TimeCreate = $data["TimeCreate"];
                    $TimeCreate = date_create($TimeCreate);
                    $TimeCreate = date_format($TimeCreate, "Y-m-d H:i:s");
                    
                    $query = "INSERT INTO orderp (ClientID, Address, PayType,
                                                OrderFee, OrderState, OrderShip, TimeCreate) 
                                    VALUES ('$ClientID','$Address1','$PayType',
                                            '$OrderFee','$OrderState','$OrderShip','$TimeCreate')";
                    return $this->model->addOrder($db, $query);
                }

                public function addOrderItem($db,$data){
                    $OrderID = $data["OrderID"];
                    $product = $data["product"];
                    $count = count($product);
                   
                    for ($i=0; $i<$count; $i++) {
                        $ProductID = $product[$i]["ProductID"];
                        $Quantity =  $product[$i]["quantity"];
                        $query = "INSERT INTO belong (OrderID, ProductID, Quantity)
                        VALUES ('$OrderID', '$ProductID', '$Quantity') ";
                        $this->model->addOrderItem($db, $query);
                    }
                }

                public function orderCurrentID($db,$data){
                    
                }
            }

?>