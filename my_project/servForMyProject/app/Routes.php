<?php
namespace orderproject;
// return array
// (
//     'page' => 'page/index',
//     'login' => 'login/auth',
// );

class Routes
{
    public static function getRoutes()
    {
        return [
            // Ваши маршруты здесь
            'login' => 'login/auth',
            'reg' => 'login/reg',
            'logout' => 'login/logout',
            'user' => 'cabinet/check'
            // ...
        ];
    }
}