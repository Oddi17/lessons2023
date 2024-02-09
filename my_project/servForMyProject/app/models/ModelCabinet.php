<?php

namespace orderproject\models;

use orderproject\lib\DataBase; 

class ModelCabinet {
    

    const CHECK_USER = "select id from customer where id_account = :id;";
    public function checkUser(){
        $id = $_GET['id'] ?? null;
        $dataReq = ["id"=>$id];
        $db = new DataBase();
        $data = $db -> getBasePrepare(self::CHECK_USER,$dataReq);
        $result = $data ? 200 : 401;
        return json_encode(["res"=>$result]);
    }




}