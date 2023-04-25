<?php
    include "./controllers/voucher.controller.php";

    $queryValue = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY); // get query param If any 
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);  // get uri
    
    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $voucher = new VoucherController();

    if($method == "GET") {
        $result = $voucher->viewVoucher($server->db);
        echo($result);
        http_response_code(200);
    }
    
    elseif($method == "POST") {
        $data = json_decode(file_get_contents('php://input'), true) ;
        $result = $voucher->addVoucher($server->db, $data);
        if (strcmp(json_decode($result), "Success") == 0){
            echo($result);
            http_response_code(200);
        } else {
            echo($result);
            http_response_code(400);
        }
    }

    elseif($method == "DELETE") {
        $data = json_decode(file_get_contents('php://input'), true) ;
        $result = $voucher->deleteVoucher($server->db, $data['id']);
        if (strcmp(json_decode($result), "Success") == 0){
            echo($result);
            http_response_code(200);
        } else {
            echo($result);
            http_response_code(400);
        }
    }

?>