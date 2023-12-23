<?php
//session_start();
//if (isset($_SESSION['is_auth'])  &&  $_SESSION['is_auth'] ) {
//    controllerPage();
//} else {
//    echo "Вы не зарегистрированы!";
//    // пауза
//    // отправляем на форму login
//}
require_once "__DIR__/../model/ModelPage.php";
require_once "__DIR__/../view/View.php";


class PageController
{

    public function actionIndex()
    {
        $res = modelPage();
        $res = array('result' => $res);
        echo render($res, 'question.tpl');
    }

}