<?php

// маршруты
return array
(
    'news' => 'news/index', // actionIndex в NewsController
    'products' => 'product/list', // actionList в ProductController
    'page' => 'page/index',
    'counter' => 'page/counter',
    'login' => 'login/index',//'auth' => 'auth/checkUser',
    'question' => 'addQuestion/index', //индекс страницы для добавления вопроса
    'add' => 'addQuestion/add', //Роут для аякса, добавление вопроса в БД
    'give' => 'addQuestion/giveAnswer', //Роут для аякса, добавление ответа в БД

);