<?php
    include "./controllers/product.controller.php";

    $queryValue = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY); // get query param If any 

    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);  // get uri

    parse_str($_SERVER['QUERY_STRING'], $params);

    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $product = new ProductController();
    if($method == "GET") {
        if ($queryValue != ""){
            $result = $product->sortProduct($server->db, $params["search"], $params["sortby"], $params["type"]);
            echo($result);
            http_response_code(200);
        } else {
            $result = $product->viewProduct($server->db);
            echo($result);
            http_response_code(200);
        }
    }
    
    elseif($method == "POST") {
        $data = json_decode(file_get_contents('php://input'), true) ;
        $result = $product->addProduct($server->db, $data);
        if (strcmp($result, "Success")){
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
        $result = $product->deleteProduct($server->db, $data);
        if (strcmp($result, "Success")){
            echo($result);
            http_response_code(200);
        }
        else {
            echo($result);
            http_response_code(400);
        }
    }

    elseif($method == "PUT") {
        $data = json_decode(file_get_contents('php://input'), true) ;
        $result = $product->updateProduct($server->db, $data);
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