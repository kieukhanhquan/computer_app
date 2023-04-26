<?php
    include "./controllers/comment.controller.php";

    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $comment = new CommentController();

    $queryValue = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY); // get query param If any 
    parse_str($_SERVER['QUERY_STRING'], $params);
    if($method == "GET") {
        if ($queryValue == null) {
            $result = $comment->viewAll($server->db);
            echo($result);
            http_response_code(200);
        } else {
            $queryParam = explode( '=', $queryValue );
            if($queryParam[0] == "search" ) {
                $result = $comment->searchComment($server->db, $params["search"]);
                echo($result);
                http_response_code(200);
            }
        }
    }

    if ($method == "POST") {
        if ($queryValue == null) {

        }
        else {
            $queryParam = explode( '=', $queryValue );
            $data = json_decode(file_get_contents('php://input'), true) ;
            if($queryParam[0] == "filter" ) {
                $result = $comment->filterComment($server->db, $data["filter"]);
                echo($result);
                http_response_code(200);
            }
        }
    }
    
    elseif($method == "DELETE") {
        $data = json_decode(file_get_contents('php://input'), true) ;
        $result = $comment->deleteComment($server->db, $data['id']);
        if (strcmp($result, "Success")){
            echo($result);
            http_response_code(200);
        }
        else {
            echo($result);
            http_response_code(400);
        }
    }

?>