<?php 
    include "./models/news.model.php";

    class NewsController {
        public $model;

        function __construct(){
            $this->model = new News();
        }

        public function viewNews($db) {
            $query = "SELECT * FROM news";
            return $this->model->viewNews($db, $query);
        }
        
        public function addNews($db, $data) {
            $query =  "INSERT INTO news (Name, Type, Author, Description) VALUES ('" . $data['Name'] . "','" . $data['Type'] . "','" . $data['Author'] . "'
            ,'" . $data['Description'] . "')";
            return $this->model->addNews($db, $query);
        }

        public function deleteNews($db, $data) {
            $query =  "DELETE FROM news WHERE id=" .$data['id']. "";
            return $this->model->deleteNews($db, $query);
        }

        public function searchNews($db, $data) {
            $query = "SELECT *
            FROM news
            WHERE Name LIKE '%". $data . "%'";
            return $this->model->searchNews($db, $query);
        }
        public function updateNews($db, $data) {
            $query =  "UPDATE news 
                    SET Type='". $data['Type'] . "',Description='" . $data['Description'] . "'
            , Name='" . $data['Name'] . "', Author='" . $data['Author'] . "'
            WHERE ID=".$data['ID']."";
            return $this->model->updateNews($db, $query);
        }
    }
?>