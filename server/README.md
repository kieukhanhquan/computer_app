# SERVER 
    ## MVC architecture
    ## FLOW
        index.php -> loader -> router -> controllers -> models
    ## ROOT URL
        http://localhost/WebApp/Server/index.php
    ## Test
        ### Để chạy đc phần BE, mn cần thay đổi một số phần như sau:
            - Mn clone code trên github về chung 1 folder cùng cấp với localhost của XAMPP
            - Mn đổi tên folder e-commerce-web-react thành WebApp
            - Trong folder Server -> loader mn thay đổi giá trị các biến sau: $serverName, $userName giống với phpmyadmin của mn
            - Import computerapp.sql trong folder Server -> schema lên phpmyadmin
        ### API để test trên Postman, áp dụng cho bảng keysearch trên phpadmin
            http://localhost/WebApp/Server/index.php/keysearch  (GET)
            http://localhost/WebApp/Server/index.php/keysearch  (POST) với data đầu vào {"name": "value"}
            http://localhost/WebApp/Server/index.php/keysearch  (DELETE) với data đầu vào {"id": "value"}