<?php

namespace orderproject\models;

use orderproject\lib\DataBase; 

class ModelCabinet {
    

    // const CHECK_USER = "select id from customer where id_account = :id"; 
    //to_char(some_date, 'dd.mm.yyyy')
    const GET_USER = " select * from customer where id_account = :id";
    const SET_USER = " insert into customer(name,dt_birth,sex,phone,id_account) values(:name,:birthdate,:gender,:phone,:id)";
    // const UPDATE_USER  = "update customer set :column = :datauser where id_account = :id ";
    // const UPDATE_USER = "update customer set name = 'Mister_2000' where id_account = 13";
    // const UPDATE_USER = "insert into customer(:column) values(:data) where id_account = :id ";
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
            // echo 'Выброшено исключение: ',  $e->getMessage(), "\n";
            return json_encode(["res"=>500,"mes"=>"Номер телефона уже существует","error"=>$e->getMessage()]);
        }

        
    }

    //TODO:если админ, то может добавлять бонусы клиентам

    public function updateUser(){
        $data= $_POST ?? null;
        $db = new DataBase();
        try{
            // var_dump($data);
            // $db -> setBasePrepare(self::UPDATE_USER,$data);
            $db -> updateBase($data);
            return json_encode(["res"=>200,"mes"=>"Параметр успешно изменен!"]);
        }catch (\Exception $e) {
            // echo 'Выброшено исключение: ',  $e->getMessage(), "\n";
            return json_encode(["res"=>500,"mes"=>"ошибка в базе","error"=>$e->getMessage()]);
        }
    }
}