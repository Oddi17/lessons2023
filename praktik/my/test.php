<?php
require_once "./lib/DataBase.php";



$db = new DataBase();
$db->openDataBase();


var_dump($db->getDataBase("select login from account"));
//foreach()