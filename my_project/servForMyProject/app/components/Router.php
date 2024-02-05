<?php

namespace orderproject\components;



// spl_autoload_register('catch_class');
// //$arr_include = ["ROOT . '/controllers/'"]
// function catch_class($name_class) {
    
//     $controllerFile = ROOT . '/controllers/' . $name_class . '.php';
//     if(file_exists($controllerFile))
//     {
//         include_once ($controllerFile);
//     }
// }
// use orderporject\routes

// $routesPath = ROOT . '/routes.php';



//echo $routesPath;
class Router
{
// массив маршрутов
    private $routes;

    public function __construct($routes_arr)
    {
        global $routesPath;
        // $this->routes = include($routesPath);
        $this->routes = $routes_arr;
        //var_dump($this->routes);
    }

// метод будет принимать управление от фронтконтроллера
    public function run()
    {
        $uri = $this->getURI();
        //echo $uri;
        foreach($this->routes as $uriPattern => $path)
        {
            if(preg_match("~$uriPattern~", $uri))
            {
                // echo 'step1';
                $segments = explode('/', $path);
                $controllerName = ucfirst(array_shift($segments) . 'Controller');
                $actionName = 'action' . ucfirst(array_shift($segments));
                //$controllerFile = ROOT . '/controllers/' . $controllerName . '.php';
                // затем проверяем: если такой файл существует, то подключаем его
                
                $controllerClass = "\\orderproject\\controllers\\{$controllerName}";
                $controllerObject = new $controllerClass;
                // $controllerObject = new $controllerName;
                $result = $controllerObject -> $actionName();
//                if(file_exists($controllerFile))
//                {
//                    include_once ($controllerFile);
//                    // создаем объект класса контроллера
//                    $controllerObject = new $controllerName;
//``                  // для этого объекта мы вызываем метод
//                    $result = $controllerObject -> $actionName();
//                }
            }
        }
    }
    private function getURI()
    {
        if(!empty($_SERVER['REQUEST_URI']))
        {
            return trim($_SERVER['REQUEST_URI'], '/');
        }
    }
}