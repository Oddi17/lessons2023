<?php

namespace orderproject\models;

use orderproject\lib\DataBase;

session_start();
// $_SESSION['is_auth']= True;


class ModelLogin {
    const SQL_SELECT_ALL_ACCOUNT = 'select login,password,id from account';
    const SQL_INSERT_NEW_ACCOUNT = "insert into account(login,password,dt_create) values (:login,:password,now())";
    

    // public function check(){
    //     try {
    //         $login = $_POST['email'] ;
    //         $passwd = $_POST['password'];
    //         return [true,$login,$passwd];

    //     } catch (\Exception $e){
    //         return json_encode(['code'=>500,'message'=>$e->getMessage()]);
    //     }
    // }


    public function auth(){
        $login = $_POST['email'] ?? null ;
        $passwd = $_POST['password'] ?? null;
        // $result = $this->check();
        // if (!$result[0]) return;
        
        $db = new DataBase();
        $data = $db->getDataBase(ModelLogin::SQL_SELECT_ALL_ACCOUNT);
        
        // var_dump($data);
        foreach($data as $account){
            if ($account["login"] == $login){
                if (password_verify($passwd,$account["password"])){
                    // return ['res'=>True,'mes'=>'Авторизация прошла успешно!'];
                    $_SESSION['is_auth']= True;
                    return json_encode([
                        'code'=>200,
                        'mes'=>'Авторизация прошла успешно!',
                        'auth'=>'true',
                        'login'=>$account["login"],
                        'id'=>$account["id"]]);
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

        // $result = $this->check();
        // if (!$result[0]) return;

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
        // return "Регистрация прошла успешно!";
        $_SESSION['is_auth']= True;
        return json_encode(['code'=>200,'mes'=>'Регистрация прошла успешно!','auth'=>'true']);
    }

    public function logout(){
        setcookie(session_name(), "", time() - 3600, "/");
        session_destroy();
        return json_encode(['code'=>200,'mes'=>"До встречи!",'auth'=>'false']);
    }
    
}