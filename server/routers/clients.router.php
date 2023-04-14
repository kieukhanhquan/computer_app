<?php
    include "./controllers/clients.controller.php";

    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $client = new ClientController();

    if($method == "GET") {
        $result = $client->viewAll($server->db);
        echo($result);
        http_response_code(200);
    }

    elseif($method == "PUT") {
        $data = json_decode(file_get_contents('php://input'), true) ;
        $result = $client->changeStatus($server->db, $data);

        if(strcmp($result, "Success")) {
            echo($result);
            http_response_code(200);
        }
        else {
            echo($result);
            http_response_code(400);
        }
    }

    elseif($method == "POST") {
        $data = json_decode(file_get_contents('php://input'), true) ;
        $result = $client->addClient($server->db, $data);

        if(strcmp($result, "Success")) {
            echo($result);
            http_response_code(200);
        }
        else {
            echo($result);
            http_response_code(400);
        }
    }

?>