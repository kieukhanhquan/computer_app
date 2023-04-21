<?php
            include "./models/auth.model.php";

            class AuthController {
                public $model;
        
                function __construct(){
                    $this->model = new Auth();
                }

                public function Login($db, $data) {
                    $UserName = $data["UserName"];
                    $Password = $data["Password"];
                    $Type = $data["Type"];
                    if ($Type == 2000000){   
                        $query = "SELECT * FROM client WHERE UserName = '$UserName'";
                        $result = $this->model->Login($db, $query);
                        $checker = json_decode($result);
                        if (count($checker) == 0){
                            return json_encode("Tài khoản không tồn tại");
                        }
                        else {
                            $checker = $checker[0];
                            if ($Password != $checker->Password) {
                                return json_encode("Mật khẩu không chính xác");
                            }
                            if(strcmp("Cấm", $checker->Status) == 0) {
                                return json_encode("Tài khoản của bạn tạm thời đang bị cấm");
                            }
                        }
                        return $result;
                    }
                    if($Type == 1000000) {
                        $query = "SELECT * FROM admin WHERE UserName = '$UserName'";
                        $result = $this->model->Login($db, $query);
                        $checker = json_decode($result);
                        if (count($checker) == 0){
                            return json_encode("Tài khoản không tồn tại");
                        }
                        else {
                            $checker = $checker[0];
                            if ($Password != $checker->Password) {
                                return json_encode("Mật khẩu không chính xác");
                            }
                        }
                        return $result;
                    }
                }
                
                public function Register($db, $data){
                    $FullName = $data["FullName"];
                    $FullName = explode(" ", $FullName, 2);
                    if (count($FullName) < 2){
                        $FirstName = "";
                        $LastName = $FullName[0];
                    }
                    else {
                        $FirstName = $FullName[1];
                        $LastName = $FullName[0];
                    }
                    $PhoneNumber = $data["PhoneNumber"];
                    $UserName = $data["UserName"];
                    $Password = $data["Password"];
                    $Confirm = $data["Confirm"];
                    $Type = $data["Type"];
                    if ($Password != $Confirm){
                        return json_encode("Mật khẩu xác nhận và mật khẩu không khớp");
                    }

                    if ($Type== 2000000) {
                        $checker = "SELECT * FROM client WHERE UserName = '$UserName'";
                        $result = $this->model->DupUser($db, $checker);
                        $checker = json_decode($result);
                        if (count($checker) !=0) {
                            return json_encode("Tên tài khoản đã tồn tại");
                        }
                        $query = "INSERT INTO client (UserName, Password, FirstName, LastName, PhoneNumber, Type, Grade, Status, Avatar)
                        VALUES('$UserName','$Password','$FirstName','$LastName','$PhoneNumber', '$Type', '1', 'Hoạt động', 'https://img.myloview.com/stickers/default-avatar-profile-flat-icon-social-media-user-vector-portrait-of-unknown-a-human-image-400-209987471.jpg') ";
                        $result = $this->model->Register($db, $query);
                        return $result;
                    }
                    else {
                        $checker = "SELECT * FROM admin WHERE UserName = '$UserName'";
                        $result = $this->model->DupUser($db, $checker);
                        $checker = json_decode($result);
                        if (count($checker) !=0) {
                            return json_encode("Tên tài khoản đã tồn tại");
                        }
                        $query = "INSERT INTO admin (UserName, Password, FirstName, LastName, PhoneNumber, Type,  Avatar)
                        VALUES('$UserName','$Password','$FirstName','$LastName','$PhoneNumber', '$Type', 'https://img.myloview.com/stickers/default-avatar-profile-flat-icon-social-media-user-vector-portrait-of-unknown-a-human-image-400-209987471.jpg') ";
                        $result = $this->model->Register($db, $query);
                        return $result;
                    }
                }

                public function ForgetPassordStep1($db, $data) {
                    $UserName = $data['UserName'];
                    $PhoneNumber = $data['PhoneNumber'];
                    $Type = $data["Type"];
                    if ($Type == 2000000) {
                        $query = "SELECT * FROM client WHERE UserName='$UserName'";
                        $result = $this->model->ForgetPassordStep1($db, $query);
                        $checker = json_decode($result);
                        if (count($checker) == 0) {
                            return json_encode("Tài khoản không tồn tại");
                        }
                        if ($PhoneNumber != $checker[0]->PhoneNumber) {
                            return json_encode("Số điện thoại không chính xác");
                        }
                        return json_encode("Success");
                    }
                    else {
                        $query = "SELECT * FROM admin WHERE UserName='$UserName'";
                        $result = $this->model->ForgetPassordStep1($db, $query);
                        $checker = json_decode($result);
                        if (count($checker) == 0) {
                            return json_encode("Tài khoản không tồn tại");
                        }
                        if ($PhoneNumber != $checker[0]->PhoneNumber) {
                            return json_encode("Số điện thoại không chính xác");
                        }
                        return json_encode("Success");
                    }
                }

                public function ForgetPassordStep2($db, $data) {
                    $UserName = $data['UserName'];
                    $Password = $data['Password'];
                    $Confirm = $data['Confirm'];
                    $Type = $data["Type"];
                    if($Password != $Confirm) {
                        return json_encode("Mật khẩu xác nhận và mật khẩu không khớp");
                    }
                    if ($Type == 2000000) {
                        $query = "UPDATE client SET Password='$Password' WHERE UserName='$UserName' ";
                        return $this->model->ForgetPassordStep2($db, $query);
                    }
                    else {
                        $query = "UPDATE admin SET Password='$Password' WHERE UserName='$UserName' ";
                        return $this->model->ForgetPassordStep2($db, $query);
                    }
                }

            }

?>