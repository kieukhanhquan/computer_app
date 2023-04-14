<?php

    class Server{
        public $serverName = "localhost";
        public $userName = "root";
        public $password = "";
        public $dbName = "computerapp";
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