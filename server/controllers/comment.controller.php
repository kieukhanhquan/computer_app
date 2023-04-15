<?php
            include "./models/comment.model.php";

            class CommentController {
                public $model;
        
                function __construct(){
                    $this->model = new Comment();
                }

                public function viewAll($db) {
                    $query = "SELECT * FROM comment";
                    return $this->model->viewAll($db, $query);
                }

                public function filterComment($db, $data) {
                    $query = "SELECT * FROM comment WHERE ProductID='$data'";
                    return $this->model->filterComment($db, $query);
                }


            }

?>