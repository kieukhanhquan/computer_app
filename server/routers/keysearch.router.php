<?php
    include "./controllers/keysearch.controller.php";

    $queryValue = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY); // get query param If any 
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);  // get uri

    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $keysearch = new KeySearchController();

    if($method == "GET") {
        $result = $keysearch->viewKeySearch($server->db);
        echo($result);
        http_response_code(200);
    }
    
    elseif($method == "POST") {
        $data = json_decode(file_get_contents('php://input'), true) ;
        $result = $keysearch->addKeySearch($server->db, $data['name']);
        if ($result == "success"){
            echo($result);
            http_response_code(200);
        }
        else {
            echo($result);
            http_response_code(400);
        }
    }

    elseif($method == "DELETE") {
        $data = json_decode(file_get_contents('php://input'), true) ;
        $result = $keysearch->deleteKeySearch($server->db, $data['id']);
        if ($result == "success"){
            echo($result);
            http_response_code(200);
        }
        else {
            echo($result);
            http_response_code(400);
        }
    }

?>