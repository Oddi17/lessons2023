<?php
require_once "./lib/DataBase.php";


define('SQL_SELECT_ALL_ACCOUNT','select * from account');
$db = new DataBase();
$db->openDataBase();
$res = $db->getDataBase(SQL_SELECT_ALL_ACCOUNT);


var_dump($res);
//foreach()