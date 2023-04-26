<?php
    include "./controllers/usev.controller.php";
    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $usev = new UsevController();

    $queryValue = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY); // get query param If any 


    if($method == "GET"){
        if($queryValue == null){
            
        }
        else{
            $queryParam = explode( '=', $queryValue );
            $result = $usev->filterUsev($server->db, $queryParam[1]);
            echo($result);
            http_response_code(200);
        }
    }

?>