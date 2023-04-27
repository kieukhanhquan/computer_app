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
        else{
            $queryParam = explode( '=', $queryValue );
            if($queryParam[0] == "viewCartID" ){
                $result = $cart->viewCartID($server->db, $queryParam[1]);
                echo($result);
                http_response_code(200);
            }
        }
        
    }

    
    
    

?>