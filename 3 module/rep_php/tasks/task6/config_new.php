<?php

// Конфигурация системы задана в виде двух ассоциативных массивов dev и prod. С ключами
// db_name, db_user, db_password, app_email, app_url, значения произвольные.
// Написать класс config который сериализует данные массивы и отдает конфигурацию
// в зависимости от настройки dev mode  или prod mode.
class Config{
    private $arr_dev = Array (
        'db_name'=>'NAME_1',
        'db_user'=>'USER_1',
        'db_password'=>'123',
        'app_email'=>'user_1@mail.com',
        'app_url'=>'/part/page_1',
    );
    private $arr_prod = Array (
        'db_name'=>'NAME_2',
        'db_user'=>'USER_2',
        'db_password'=>'321',
        'app_email'=>'user_2@mail.com',
        'app_url'=>'/part/page_2',
    );

    public function settingsConfig($mode) {
        if ($mode == 'dev_mode') {
            return serialize($this->arr_dev);
        }elseif ($mode == 'prod_mode') {
            return serialize($this->arr_prod);
        }else {
            echo "Invalide mode!";
        }
    }

}

$set_1 = new Config();
var_dump($set_1->settingsConfig('prod_mode'));

