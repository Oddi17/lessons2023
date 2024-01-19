<?php
require_once "__DIR__/../model/ModelLogin.php";
require_once "__DIR__/../view/View.php";

class LoginController {

    //$res = model();
    //echo render($res, 'form_login.tpl');

    public function actionForm(){
        // $mdl = new ModelLogin();
        // $res = $mdl -> getData();
        echo render(array(),'form_login.tpl');
    }
}