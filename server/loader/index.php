<?php

    class Server{
        public $serverName = "127.0.0.1";
        public $userName = "root";
        public $password = "";
        public $dbName = "test";
        public $db = null;
        
        public function Connect() {
            $this->db = mysqli_connect($this->serverName, $this->userName, $this->password, $this->dbName);
            if (!$this->db) {
                die("Connection failed: " . mysqli_connect_error());
            }
        }

        public function disConnect() {
            mysqli_close($this->db);
        } 
    }
    
?>