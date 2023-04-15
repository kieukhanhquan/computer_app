<?php
    include "./controllers/product.controller.php";

    $method = $_SERVER['REQUEST_METHOD'];
    $server = $GLOBALS['server'];
    $product = new ProductController();

    $currentFile = $_SERVER['PHP_SELF'];

    if($method == "GET"){
        $result = $product->viewAll($server->db);
        echo($result);
        http_response_code(200);
    }
?>