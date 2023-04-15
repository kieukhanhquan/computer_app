<?php
    include "./controllers/comment.controller.php";

    $queryValue = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY); // get query param If any 
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);  // get uri
    parse_str($_SERVER['QUERY_STRING'], $params);

    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $comment = new CommentController();

    if($method == "GET") {
        if ($queryValue != ""){
            $result = $comment->searchComment($server->db, $params["search"]);
            echo($result);
            http_response_code(200);
        } else {
            $result = $comment->viewComment($server->db);
            echo($result);
            http_response_code(200);
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