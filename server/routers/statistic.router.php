<?php
    include "./controllers/statistic.controller.php";

    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $order = new StatisticController();

    $queryValue = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY); // get query param If any 

    if($method == "GET") {
        if ($queryValue == null) {

        }
        else {
            $queryParam = explode( '=', $queryValue );
            if($queryParam[0] == "revenue" ){
                $result = $order->Revenue($server->db, $queryParam[1]);
                echo($result);
                http_response_code(200);
            }
            else if($queryParam[0] == "product" ){
                $result = $order->ProductType($server->db, $queryParam[1]);
                echo($result);
                http_response_code(200);
            }
        }
       

    }

?>