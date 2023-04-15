<?php
    include "./controllers/product.controller.php";

    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $product = new ProductController();

    $currentFile = $_SERVER['PHP_SELF'];
    echo $currentFile;

    if($method == "GET"){
        $result = $product->viewAll($server->db);
        echo($result);
        http_response_code(200);
    }
    else if($method == "PUT"){

    }
    else if($method == "POST"){

    }
    else if($method == ""){

    }
?>