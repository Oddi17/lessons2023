<?php
session_start();
//require_once "config.php";
require_once "./lib/DataBase.php";
require_once "./model/ModelLogin.php";

$login = $_POST['email'] ;
$passwd = $_POST['password'];
$content = "VVeden ranee:"."$login:" . "$passwd"."<pre>";
echo $content;
checkUser($login, $passwd);
//checkPass($login, $passwd);

function checkUser($login,$passwd){
    $mdl = new ModelLogin();
    $result = $mdl->auth($login, $passwd);
    if ($result[0]) {
        echo $result[1];
    } else {
        if ($result[2]) {
            echo $mdl->registration($login, $passwd);
        } else{
            echo $result[1];
        }
        
    }
    
}

// function checkPass($login='guest', $passwd="" ){
//     $row = $login . " " . $passwd ."\n";
//     if (isUserExists($login,$passwd )) {
//         echo "Вы прошли аутентификацию!";

//         // Установить сессионную переменную is_auth
//         $_SESSION['is_auth'] = True;
//         // todo: Редирект в админку
//     }  else {
//         echo "Вы зарегистрированы!";
//         writePasswordFile($row);
//         // todo: Редирект на логин
//     }
// }

// function writePasswordFile($row)
// {
//     global $filePassword;
//     // Check if conf file exist and file is writable. .
//     if (file_exists($filePassword) && is_writable($filePassword)) {
//         $fd = fopen($filePassword , 'a');
//         fwrite($fd, $row);
//         fclose($fd);
//     }
// }

//function isUserExists($login, $passwd) {
    
    // define('SQL_SELECT_ALL_ACCOUNT','select login,password from account');
    // $db = new DataBase();
    // $data = $db->getDataBase(SQL_SELECT_ALL_ACCOUNT);
    
    // var_dump($data);
   //$result =  readPassword();
   //foreach ($result as $value) {

        // var_dump($value);
        //$_login =  $value[0];
        //$_passwd = $value[1];
        // echo "<pre>";
        // var_dump($login, $passwd );
        // var_dump($_login, $_passwd );
        // echo "</pre>";
        

    //    if ($_login == $login  and $_passwd == $passwd ) {
    //        return True;
    //    }
   //}
   //return False;
//}

// function readPassword(){
//     global $filePassword;
//     $lines = file($filePassword);
//     $mass_passwd = [];
//     foreach($lines as $line)
//     {
//         $result = [];
//         $result = explode(" ", $line);
//         $mass_passwd[] = $result;
//     }
//     return $mass_passwd;
// }





