<?php

namespace orderproject\controllers;

use orderproject\models\ModelLogin;

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
    
    public function actionLogout(){
        $mdl = new ModelLogin();
        $result = $mdl->logout();
        echo $result;
    }
}



