<?php
    include "./controllers/auth.controller.php";

    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $auth = new AuthController();

    $queryValue = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY); // get query param If any 

    if($method == "GET") {
        if ($queryValue == null) {

        }
        else {
            $queryParam = explode( '&', $queryValue );
            $UserName = explode( '=', $queryParam[0] );
            $Password = explode( '=', $queryParam[1] );
            $Type = explode( '=', $queryParam[2]);
            $data = array("UserName" => $UserName[1], "Password" => $Password[1], "Type" => $Type[1]);
            $result = $auth->Login($server->db, $data);
            $type = gettype(json_decode($result));
            if (strcmp($type, "string") == 0) {
                echo($result);
                http_response_code(400);
            }
            else {
                echo($result);
                http_response_code(200);
            }
        }
    }

    if ($method == "PUT") {
        $data = json_decode(file_get_contents('php://input'), true) ;
        $Step = $data["Step"];
        if ($Step == 1) {
            $result = $auth->ForgetPassordStep1($server->db, $data);
        }
        elseif($Step == 2) {
            $result = $auth->ForgetPassordStep2($server->db, $data);
        }
        if (strcmp(json_decode($result), "Success") == 0) {
            echo($result);
            http_response_code(200);
        }
        else {
            echo($result);
            http_response_code(400);
        }
    }

    if ($method == "POST") {
        $data = json_decode(file_get_contents('php://input'), true) ;
        $result = $auth->Register($server->db, $data);
        if (strcmp(json_decode($result), "Success") == 0) {
            echo($result);
            http_response_code(200);
        }
        else {
            echo($result);
            http_response_code(400);
        }
    }
    

    // if ($method == "PUT") {
       
    // }

?>