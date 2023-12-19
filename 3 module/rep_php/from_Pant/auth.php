<?php
/******************Проверка аутентификации*******************/
require_once 'config.php';
//echo $_email; 
$email = $_POST['email'];
$password = $_POST['password'];
checkPass($email, $_email, $password, $_password);

// Проверка логина и пароля
function checkPass($email,$_email, $password,$_password)
{   
    // echo $email;
    // echo $password;
    $row = $email . " " . $password . "\n";
    if ($email && $password){
        if (isUserExists($email,$_email, $password,$_password)) {
            echo "Добро пожаловать,". ($email == "admin" ? "администратор": $email);
            //echo 'Добро пожаловать, администратор!';
    
            // Редирект в админку
            //header("Location: admin_panel.php");
            //exit();
        } else {
            // if (!$password || !$email) {
            //     echo "Please, enter email and password";
            //     @include 'form_auth.tpl';
            //     return;
            // }
            echo 'Вы зарегестрированы!';
            writePasswordFile($row);
        }
    } else {
        echo "Please, enter email and password";
        return;
    }
    
}

function writePasswordFile($row)
{
    global $filePassword;
    // Проверка на существование файла и возможности на чтение
    if (file_exists($filePassword) && is_writable($filePassword)) {
        $fd = fopen($filePassword, 'a');
        fwrite($fd, $row);
        fclose($fd);
    }
}

function isUserExists($email,$_email, $password,$_password)
{
    $result = readPassword();
    foreach ($result as $value) {
        // echo "login:".$value[0]."\n";
        // echo "passwd:".$value[1]."\n";
        // echo gettype($email);
        // echo gettype($password);
        // echo $email;
        // echo $password;


        //$_email = $value[0];
        //$_password = $value[1];

        if ($email === $_email && $password === $_password) {
            return TRUE;
        }
        if ($email == $value[0]  && $password == $value[1]){ // почему только после смены равно с === на ==
            return TRUE;
        }
    }
    return FALSE;
}

function readPassword()
{

    global $filePassword;
    $lines = file($filePassword);
    $mass_passwd = [];

    foreach ($lines as $line) {
        $result = explode(' ', $line);
        $mass_passwd[] = $result;
    }
    return $mass_passwd;
}
