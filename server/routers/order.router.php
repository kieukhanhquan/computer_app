<?php
    include "./controllers/order.controller.php";

    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $order = new OrderController();

    $queryValue = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY); // get query param If any 

    if($method == "GET") {
        if ($queryValue == null) {
            $result = $order->viewAll($server->db);
            echo($result);
            http_response_code(200);
        }
        else {
            $queryParam = explode( '=', $queryValue );
            if($queryParam[0] == "order" ){
                $result = $order->orderSpecific($server->db, $queryParam[1]);
                echo($result);
                http_response_code(200);
            }
            if($queryParam[0]=="orderID"){
                $result = $order->orderCurrentID($server->db, $queryParam[1]);
                echo($result);
                http_response_code(200);
            }
        }
       

    }

    if ($method == "POST") {
        if ($queryValue == null) {
            
        }
        else {
            $queryParam = explode( '=', $queryValue );
            $data = json_decode(file_get_contents('php://input'), true) ;
            if($queryParam[0] == "filter" ) {
                $result = $order->filterOrder($server->db, $data["filter"]);
                echo($result);
                http_response_code(200);
            }
            if($queryParam[0] == "search") {
                $result = $order->searchOrder($server->db, $data);
                echo($result);
                http_response_code(200);   
            }
            if($queryParam[0] == "detail") {
                $result = $order->orderDetail($server->db, $data);
                echo($result);
                http_response_code(200);   
            }
            if($queryParam[0] == "add") {
                $result = $order->addOrder($server->db, $data);
                
                if(strcmp(json_decode($result), "fail") == 0) {
                    echo($result);
                    http_response_code(400);
                }
                else {
                    
                    echo($result);
                    http_response_code(200);
                }  
            }
            if($queryParam[0] == "belong"){
                $result = $order->addOrderItem($server->db, $data);
                echo($result);
                // if(strcmp(json_decode($result), "fail") == 0) {
                //     echo($result);
                //     http_response_code(200);
                // }
                // else {
                //     echo($result);
                //     http_response_code(400);
                // }  
            }
        }
    }

    if ($method == "PUT") {
        if ($queryValue == null) {
            $data = json_decode(file_get_contents('php://input'), true) ;
            $result = $order->changeStatus($server->db, $data);
        if(strcmp(json_decode($result), "Success") == 0) {
            echo($result);
            http_response_code(200);
        }
        else {
            echo($result);
            http_response_code(400);
        }
    }
        else {
            $queryParam = explode( '=', $queryValue );
            $data = json_decode(file_get_contents('php://input'), true) ;
            if($queryParam[0] == "order" ) {
                $result = $order->updateProduct($server->db, $queryParam[1]);
                echo($result);
                http_response_code(200);
            }
        }
    }

?>