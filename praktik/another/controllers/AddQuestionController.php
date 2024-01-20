<?php

require_once "__DIR__/../view/View.php";
require_once "__DIR__/../model/ModelPage.php";

class AddQuestionController {

    public function actionIndex(){
        //var_dump('Stage 1');
        echo render(array(),'question.tpl');
    }
    public function actionAdd(){
        $mdl = new ModelPage();
        $arResult = $mdl->addQuestion($_POST['question']);
        echo $arResult;

        //var_dump($_POST['question']);
    }
}