<?php 

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header('Content-Type: application/json');
    include_once "./loader/index.php";

    $queryValue = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY); // get query param If any 
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);  // get uri
    $uri = explode( '/', $uri ); 
    $pathName = $uri[4];

    $server = new Server();
    $server->Connect();

    if ($pathName == "keysearch") {
        include_once "./routers/keysearch.router.php";
    }

    elseif($pathName == "clients") {
        include_once "./routers/clients.router.php";
    }
    

    $server->disConnect()

?>