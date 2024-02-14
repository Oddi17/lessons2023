<?php

namespace orderproject\components;


class Router
{
// массив маршрутов
    private $routes;

    public function __construct($routes_arr)
    {
        global $routesPath;
        $this->routes = $routes_arr;

    }

// метод будет принимать управление от фронтконтроллера
    public function run()
    {
        $uri = $this->getURI();
        foreach($this->routes as $uriPattern => $path)
        {
            if(preg_match("~$uriPattern~", $uri))
            {
                $segments = explode('/', $path);
                $controllerName = ucfirst(array_shift($segments) . 'Controller');
                $actionName = 'action' . ucfirst(array_shift($segments));
                // затем проверяем: если такой файл существует, то подключаем его
                
                $controllerClass = "\\orderproject\\controllers\\{$controllerName}";
                $controllerObject = new $controllerClass;

                $result = $controllerObject -> $actionName();
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