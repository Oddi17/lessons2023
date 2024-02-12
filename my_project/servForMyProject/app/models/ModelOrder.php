<?php 
namespace orderproject\models;

use orderproject\lib\DataBase;


class ModelOrder {
    public function addOrder(){
        $orderDate = $_POST['orderdate'] ?? null;
        $id = $_POST['id'] ?? null;
        $db = new DataBase();
        $res = $db -> addOrderBase($orderDate,$id);
        if ($res['is_done']) {
            return json_encode(["code"=>"200","mes"=>"Бронирование прошло успешно!"]);
        }else{
            return json_encode(["code"=>"500", "mes"=>$res['error_message']]);
        }
    }
}
