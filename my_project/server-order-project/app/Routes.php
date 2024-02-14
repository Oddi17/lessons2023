<?php
namespace orderproject;

class Routes
{
    public static function getRoutes()
    {
        return [
            'login' => 'login/auth',
            'reg' => 'login/reg',
            'logout' => 'login/logout',
            'user' => 'cabinet/check',
            'create' => 'cabinet/create',
            'update' => 'cabinet/update',
            'order' => 'order/setorder'
        ];
    }
}