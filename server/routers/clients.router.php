<?php
    include "./controllers/clients.controller.php";

    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $client = new ClientController();

    $queryValue = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY); // get query param If any 

    if($method == "GET") {
        if ($queryValue == null) {
            $result = $client->viewAll($server->db);
            echo($result);
            http_response_code(200);
        }
        else {
            $queryParam = explode( '=', $queryValue );
            if ($queryParam[0] == "search") {
                $result = $client->searchClient($server->db, $queryParam[1]);
                echo($result);
                http_response_code(200);
            } 
            if ($queryParam[0] == "sort") {
                $result = $client->sortClient($server->db, $queryParam[1]);
                echo($result);
                http_response_code(200);
            }
            if ($queryParam[0] == "getByID"){
                $result = $client->getClient($server->db, $queryParam[1]);
                echo($result);
                http_response_code(200);
            }
        }
    }

    elseif($method == "PUT") {
        $data = json_decode(file_get_contents('php://input'), true) ;

        if ($data["type"] == 0) {
            $result = $client->changeStatus($server->db, $data);
        }
        if ($data["type"] == 1) {
            $result = $client->updateUser($server->db, $data);
        }
        
        if ($data["type"] == 2) {
            $result = $client->updateGrade($server->db, $data);
        }
        
        if ($data["type"] == 3) {
            $result = $client->changePassword($server->db, $data);
        }
        if(strcmp(json_decode($result), "Success") == 0) {
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
        $result = $client->deleteClient($server->db, $data);
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