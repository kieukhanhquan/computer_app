<?php
    include "./controllers/cart.controller.php";

    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $cart = new CartController();

    $queryValue = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY); // get query param If any 

    if($method == "GET") {
        if ($queryValue == null) {
            $result = $cart->viewAll($server->db);
            echo($result);
            http_response_code(200);
        }
        
    }

    
    elseif($method == "POST") {
        $data = json_decode(file_get_contents('php://input'), true) ;
        $result = $cart->addCart($server->db, $data);
        if(strcmp(json_decode($result), "Success") == 0) {
            echo($result);
            http_response_code(200);
        }
        else {
            echo($result);
            http_response_code(400);
        }
    }

    elseif($method == "DELETE"){
        $data = json_decode(file_get_contents('php://input'), true) ;
        $result = $cart->deleteCart($server->db, $data);
        if(strcmp(json_decode($result), "Success") == 0) {
            echo($result);
            http_response_code(200);
        }
        else {
            echo($result);
            http_response_code(400);
        }
    }

?>