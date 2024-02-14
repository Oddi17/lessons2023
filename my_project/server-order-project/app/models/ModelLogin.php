<?php

namespace orderproject\models;

use orderproject\lib\DataBase;

session_start();



class ModelLogin {
    const SQL_SELECT_ALL_ACCOUNT = 'select login,password,id from account';
    const SQL_INSERT_NEW_ACCOUNT = "insert into account(login,password,dt_create) values (:login,:password,now())";
    
    public function auth(){
        $login = $_POST['email'] ?? null;
        $passwd = $_POST['password'] ?? null;
        $db = new DataBase();
        $data = $db->getDataBase(ModelLogin::SQL_SELECT_ALL_ACCOUNT);
        
        foreach($data as $account){
            if ($account["login"] == $login){
                if (password_verify($passwd,$account["password"])){
                    $_SESSION['is_auth']= True;
                    return json_encode([
                        'code'=>200,
                        'mes'=>'Авторизация прошла успешно!',
                        'auth'=>'true',
                        'login'=>$account["login"],
                        'id'=>$account["id"]]);
                }else {
                    return json_encode(['code'=>403,'mes'=>'Неверный пароль!']);
                }  
            }
        }    
        return json_encode(['code'=>401,'mes'=>'Пользователя не существует!']); 
        
        
    }
    public function reg(){

        $login = $_POST['email'] ?? null;
        $passwd = $_POST['password'] ?? null;
        $db = new DataBase();
        $data = $db->getDataBase(ModelLogin::SQL_SELECT_ALL_ACCOUNT);
        foreach ($data as $account){
            if ($login == $account["login"]){
                return json_encode(['code'=>400,'mes'=>'Пользователь уже существует!']);
            }
        }
        $pas = password_hash($passwd,PASSWORD_DEFAULT);
        $datUser = ['login'=>$login,'password'=>$pas];
        
        $db->setBasePrepare(ModelLogin::SQL_INSERT_NEW_ACCOUNT,$datUser);
        $_SESSION['is_auth']= True;
        return json_encode(['code'=>200,'mes'=>'Регистрация прошла успешно!','auth'=>'true']);
    }

    public function logout(){
        setcookie(session_name(), "", time() - 3600, "/");
        session_destroy();
        return json_encode(['code'=>200,'mes'=>"До встречи!",'auth'=>'false']);
    }
    
}