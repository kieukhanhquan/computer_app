<?php 
    include "./models/comment.model.php";

    class CommentController {
        public $model;

        function __construct(){
            $this->model = new Comment();
        }

        public function viewComment($db) {
            $query = "SELECT * FROM comment";
            return $this->model->viewComment($db, $query);
        }

        public function deleteComment($db, $data) {
            $query =  "DELETE FROM comment WHERE id=" .$data. ";";
            return $this->model->deleteComment($db, $query);
        }

        public function searchComment($db, $data) {
            $query = "SELECT *
            FROM comment
            WHERE Content LIKE '%". $data . "%' OR  ClientID LIKE '%". $data . "%' OR  ProductID LIKE '%". $data . "%'";
            return $this->model->searchComment($db, $query);
        }
    }
?>