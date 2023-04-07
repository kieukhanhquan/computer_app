<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
// Định nghĩa thư mục gốc của ứng dụng
define('ROOT_PATH', __DIR__);

// Cấu hình autoload
require_once(ROOT_PATH . '/vendor/autoload.php');

// Khởi tạo ứng dụng 
$app = new \e-commerce-web-react\App();


// Chạy ứng dụng
$app->run();
