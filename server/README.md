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

        ### Authentication(client Type: 2000000 || admin Type: 1000000)
            #### Login API
                http://localhost/WebApp/Server/index.php/auth?UserName=Value&Password=Value&Type=Value (GET)
                EX: http://localhost/WebApp/Server/index.php/auth?UserName=giangngocnu24&Password=Giangnu24&Type=2000000
            #### Register API
                http://localhost/WebApp/Server/index.php/auth (POST) với data đầu vào {
                                                                                            "FullName": value,
                                                                                            "UserName": value,
                                                                                            "Password": value,
                                                                                            "PhoneNumber": value,
                                                                                            "Confirm": value,
                                                                                            "Type": value
                                                                                        }
                EX: http://localhost/WebApp/Server/index.php/auth 
                    data: {
                            "FullName": "Nguyen Huu Luong",
                            "UserName": "giangngocnu999",
                            "Password": 123,
                            "PhoneNumber": 1356,
                            "Confirm": 123,
                            "Type": 2000000
                        }

                #### Forget password
                    ##### Step 1: Check UserName and PhoneNumber
                        API: http://localhost/WebApp/Server/index.php/auth (PUT) với data đầu vào {
                                                                                                    "UserName": value,
                                                                                                    "PhoneNumber": value,
                                                                                                    "Type": value,
                                                                                                    "Step": 1
                                                                                                }
                        EX: http://localhost/WebApp/Server/index.php/auth 
                        data: {
                                "UserName": "giangngocnu999",
                                "PhoneNumber": 1356,
                                "Type": 2000000,
                                "Step": 1
                            }
                    ##### Step2 : Change password:
                        API: http://localhost/WebApp/Server/index.php/auth (PUT) với data đầu vào {
                                                                                                  "UserName": value,
                                                                                                  "Password": value,
                                                                                                  "Confirm": value,
                                                                                                  "Type": value,
                                                                                                  "Step": 2
                                                                                                }
