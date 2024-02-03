<?php
require_once "__DIR__/../model/ModelLogin.php";
require_once "__DIR__/../view/View.php";

class LoginController {
    //$res = model();
    //echo render($res, 'form_login.tpl');

    public function actionIndex(){
        echo render(array(),'login.tpl');
    }
}