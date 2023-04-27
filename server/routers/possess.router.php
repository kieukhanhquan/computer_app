<?php
    include "./controllers/possess.controller.php";
    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $possess = new PossessController();

    $queryValue = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY); // get query param If any 

    if($method == "GET"){
        if($queryValue == null){
            $result = $possess->viewAll($server->db);
            echo($result);
            http_response_code(200);
        }
        else{
            $queryParam = explode( '=', $queryValue );
            $result = $possess->filterPossess($server->db, $queryParam[1]);
            echo($result);
            http_response_code(200);
            
        }
    }

    elseif($method == "POST"){
        $data = json_decode(file_get_contents('php://input'),true);
        $result = $possess->addtoCart($server->db,$data);
        if(strcmp(json_decode($result), "Success") == 0) {
            echo($result);
            http_response_code(200);
        }
        else {
            echo($result);
            http_response_code(400);
        }
    }
    elseif($method =="PUT"){
        $data = json_decode(file_get_contents('php://input'),true);
        $result = $possess->updateQuantity($server->db,$data);
        if(strcmp(json_decode($result), "Success") == 0) {
            echo($result);
            http_response_code(400);
        }
        else {
            echo($result);
            http_response_code(200);
        }
    }
    elseif($method =="DELETE"){
        if($queryValue == null){
            $data = json_decode(file_get_contents('php://input'),true);
            $result = $possess->deleteCartItem($server->db,$data);
            if(strcmp(json_decode($result), "Success") == 0) {
                echo($result);
                http_response_code(200);
            }
            else {
                echo($result);
                http_response_code(400);
            }
        }
        else{
            $queryParam = explode( '=', $queryValue );
            $data = json_decode(file_get_contents('php://input'), true) ;
            if($queryParam[0] == "clear"){
                $result = $possess->clearCart($server->db,$data);
                if(strcmp(json_decode($result), "Success") == 0) {
                    echo($result);
                    http_response_code(200);
                }
                else {
                    echo($result);
                    http_response_code(400);
                }
            }
        }
        
    }

?>