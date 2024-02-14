<?php

class ModelLogin {
    const SQL_SELECT_ALL_ACCOUNT = 'select login,password from account';
    //const SQL_INSERT_NEW_ACCOUNT = '';
    public function auth($log,$pas){
        $db = new DataBase();
        $data = $db->getDataBase(ModelLogin::SQL_SELECT_ALL_ACCOUNT);
        var_dump($data);
        foreach($data as $account){
            if ($account["login"] == $log){
                if (password_verify($pas,$account["password"])){
                //if ($account["password"] == $pas){
                    return [True,'Авторизация прошла успешно!',0];
                }else {
                    return [False,'Неверный пароль!',0];
                }
            }
        }
        return [False,'',1];
        //     if ($account["login"] == $log and $account["password"] == $pas) {
        //         return True;
        //     };
        // }
        // return False;
    }
    public function registration($log,$pas){
        $dateNow = date("Y-m-d H:i:s"); //(формат MySQL DATETIME
        $pas = password_hash($pas,PASSWORD_DEFAULT);
        $id_user=6;
        define('SQL_INSERT_NEW_ACCOUNT',"insert into account(id_user,login,password,dt_create) values ('$id_user','$log','$pas','$dateNow')");
        $db = new DataBase();
        //$db->getDataBase(ModelLogin::SQL_INSERT_NEW_ACCOUNT);
        $db->getDataBase(SQL_INSERT_NEW_ACCOUNT);
        return "Регистрация прошла успешно!";
        //$data = $db->getDataBase(ModelLogin::SQL_INSERT_NEW_ACCOUNT);
    }
    
}