<?php

namespace orderporject\controllers;

use orderporject\models\ModelLogin;

class LoginController {
    public function actionAuth(){
        $mdl = new ModelLogin();
        $result = $mdl->auth();
        echo $result;
       
    }
    public function actionReg(){
        $mdl = new ModelLogin();
        $result = $mdl->reg();
        echo $result;
    }
}



