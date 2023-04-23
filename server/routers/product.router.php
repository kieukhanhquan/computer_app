<?php
    include "./controllers/product.controller.php";

    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $product = new ProductController();
    parse_str($_SERVER['QUERY_STRING'], $params);
    $currentFile = $_SERVER['PHP_SELF'];

    if($method == "GET"){
        if ($queryValue != ""){
            $result = $product->sortProduct($server->db, $params["search"], $params["sortby"], $params["type"]);
            echo($result);
            http_response_code(200);
        }
        else {
        $result = $product->viewAll($server->db);
        echo($result);
        http_response_code(200);
        }
    }
    elseif($method == "POST") {
        if ($queryValue == null){

        } else {
            $queryParam = explode('=', $queryValue);
            $data = json_decode(file_get_contents('php://input'), true) ;
            if ($queryParam[0] == "add"){
                $result = $product->addProduct($server->db, $data);
                if (strcmp(json_decode($result), "Success") == 0){
                    echo($result);
                    http_response_code(200);
                } else {
                    echo($result);
                    http_response_code(400);
                }

            }
            if ($queryParam[0] == "filter"){
                // echo($data["Type"]);
                $result = $product->filterProduct($server->db, $data);
                echo($result);

            }
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