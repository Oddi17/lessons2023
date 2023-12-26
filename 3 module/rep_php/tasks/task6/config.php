<?php

// todo: 6
// Конфигурация системы задана в виде двух ассоциативных массивов dev и prod. С ключами
// db_name, db_user, db_password, app_email, app_url, значения произвольные.
// Написать класс config который сериализует данные массивы и отдает конфигурацию
// в зависимости от настройки dev mode  или prod mode.


class Config {
    private $_dev = Array (
        "db_name" => "BD_1",
        "db_user" => "USERDB_1", 
        "db_password" => 123456, 
        "app_email" => "email_1", 
        "app_url" => "/rondo/link_1", 
    );

    private $_prod = Array (
        "db_name" => "BD_2",
        "db_user" => "USERDB_2", 
        "db_password" => 654321, 
        "app_email" => "email_2", 
        "app_url" => "/rondo/link_2", 
    );

    

}