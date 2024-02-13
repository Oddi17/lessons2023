<?php

namespace orderproject\models;

use orderproject\lib\DataBase; 
use orderproject\http\Request;

class ModelCabinet {
    const GET_USER = " select * from customer where id_account = :id";
    const SET_USER = " insert into customer(name,dt_birth,sex,phone,id_account) values(:name,:birthdate,:gender,:phone,:id)";
    public function checkUser(){

        $id = $_GET['id'] ?? null;
        $dataReq = ["id"=>$id];
        $db = new DataBase();
        $data = $db -> getBasePrepare(self::GET_USER,$dataReq);
        $result = $data ? 200 : 401;
        return json_encode(["res"=>$result,"data"=>$data]);
    }

    public function createUser(){
        $data= $_POST ?? null;
        $db = new DataBase();
        try{
            $db -> setBasePrepare(self::SET_USER,$data);
            return json_encode(["res"=>200,"mes"=>"Пользователь успешно создан!"]);
        }catch (\Exception $e) {
            return json_encode(["res"=>500,"mes"=>"Номер телефона уже существует","error"=>$e->getMessage()]);
        } 
    }


    public function updateUser(){
        $data= $_POST ?? null;
        $db = new DataBase();
        try{
            $db -> updateBase($data);
            return json_encode(["res"=>200,"mes"=>"Параметр успешно изменен!"]);
        }catch (\Exception $e) {
            return json_encode(["res"=>500,"mes"=>"ошибка в базе","error"=>$e->getMessage()]);
        }
    }
}