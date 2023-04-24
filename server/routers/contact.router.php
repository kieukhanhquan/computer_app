<?php
    include "./controllers/contact.controller.php";

    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $contact = new ContactController();
    parse_str($_SERVER['QUERY_STRING'], $params);
    $currentFile = $_SERVER['PHP_SELF'];

    if($method == "GET"){
        $result = $contact->viewContact($server->db);
        echo($result);
        http_response_code(200);
    }
    elseif($method == "PUT") {
        if ($queryValue == null){

        } else {
            $queryParam = explode('=', $queryValue);
            $data = json_decode(file_get_contents('php://input'), true) ;
            if ($queryParam[0] == "update"){
                $result = $contact->updateContact($server->db, $data);
                if (strcmp(json_decode($result), "Success") == 0){
                    echo($result);
                    http_response_code(200);
                } else {
                    echo($result);
                    http_response_code(400);
                }

            }
        }
    }
?>