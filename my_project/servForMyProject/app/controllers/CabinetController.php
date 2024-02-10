<?php 

namespace orderproject\controllers;

use orderproject\models\ModelCabinet;
 

class CabinetController {

    public function actionCheck(){
        $mdl = new ModelCabinet();
        $result = $mdl->checkUser();
        echo $result;
    }


    public function actionCreate(){
        $mdl = new ModelCabinet();
        $result = $mdl->createUser();
        echo $result;
    }

    public function actionUpdate(){
        $mdl = new ModelCabinet();
        $result = $mdl->updateUser();
        echo $result;
    }
}