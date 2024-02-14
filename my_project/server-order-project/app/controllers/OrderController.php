<?php
namespace orderproject\controllers;

use orderproject\models\ModelOrder;

class OrderController {
    public function actionSetorder() {
        $mdl = new ModelOrder();
        $result = $mdl->addOrder();
        echo $result;
    }
}