<?php

namespace orderporject\models;

use orderporject\lib\DataBase;

class ModelLogin {
    const SQL_SELECT_ALL_ACCOUNT = 'select login,password from account';
    const SQL_INSERT_NEW_ACCOUNT = "insert into account(login,password,dt_create) values ('$login','$pas',now())";

    public function check(){
        try {
            $login = $_POST['email'] ;
            $passwd = $_POST['password'];
            return [true,$login,$passwd];
        } catch (Excepton $e){
            return json_encode(['code'=>500,'message'=>$e->getMessage()]);
        }
    }


    public function auth(){
        $login = $_POST['email'] ;
        $passwd = $_POST['password'];
        $result = $this->check();
        if (!$result[0]) return;
        
        $db = new DataBase();
        $data = $db->getDataBase(ModelLogin::SQL_SELECT_ALL_ACCOUNT);
        // var_dump($data);
        foreach($data as $account){
            if ($account["login"] == $login){
                if (password_verify($passwd,$account["password"])){
                    // return ['res'=>True,'mes'=>'Авторизация прошла успешно!'];
                    return json_encode(['code'=>200,'mes'=>'Авторизация прошла успешно!']);
                }else {
                    // return ['res'=>False,'mes'=>'Неверный пароль!'];
                    return json_encode(['code'=>403,'mes'=>'Неверный пароль!']);
                }  
            }
        }    
        // return ['res'=>False,'mes'=>'Пользователя не существует!'];
        return json_encode(['code'=>401,'mes'=>'Пользователя не существует!']);       
    }
    public function reg(){

        $result = $this->check();
        if (!$result[0]) return;

        $login = $_POST['email'] ;
        $passwd = $_POST['password'];
        $pas = password_hash($passwd,PASSWORD_DEFAULT);
        $db = new DataBase();
        $db->getDataBase(ModelLogin::SQL_INSERT_NEW_ACCOUNT);
        // return "Регистрация прошла успешно!";
        return json_encode(['code'=>200,'mes'=>'Регистрация прошла успешно!']);
    }
    
}