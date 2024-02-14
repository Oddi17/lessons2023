<?php

spl_autoload_register('catch_class');
// $arr_include =  ["ROOT . '/controllers/'"];
// $controllerFile = ROOT . '/controllers/' . $controllerName . '.php';

      function catch_class($name_class) {
        echo $name_class;
        $controllerFile = ROOT . '/controllers/' . $name_class . '.php';
        echo $controllerFile;
        if (file_exists($controllerFile)) {
        // $path = str_replace('\\' , '/', $name_class);
        // $path = DIR.'/' .$path . '.php';
        // var_dump($path);
            include_once ($controllerFile);
      }
    }

$routesPath = ROOT .'/routes.php';
class Router
{
    // массив маршрутов
    private $routes;

    public function __construct()
    {
        $this->routes = array
        (
            'news' => 'news/index', // actionIndex в NewsController
            'products' => 'product/list', // actionList в ProductController
        );


        $routesPath = ROOT . '/routes.php';
        $this->routes = include($routesPath);
    }

    // метод будет принимать управление от фронтконтроллера
    public function run()
    {
        // echo 'your request:';
        $uri = $this->getURI();
        // echo $uri;



        foreach ($this->routes as $uriPattern => $path) {

            if (preg_match("~$uriPattern~", $uri)) {
                $segments = explode('/', $path);
                $controllerName = ucfirst(array_shift($segments) . 'Controller');
                // echo '<pre>';
                // print_r($segments);
                // echo '</pre>';
                // print_r($controllerName);
                $actionName = 'action' . ucfirst(array_shift($segments));
                // echo '</br>';
                // print_r($actionName);

                // Определяем путь к файлу, который нужно подключить (путь к файлу класса)
                // $controllerFile = ROOT . '/controllers/' . $controllerName . '.php';
                // echo $controllerFile;
                $controllerObject = new $controllerName;
                $result = $controllerObject->$actionName();

                // затем проверяем: если такой файл существует, то подключаем его
                // if (file_exists($controllerFile)) {
                //     include_once($controllerFile);
                //     $controllerObject = new $controllerName;

                //     // для этого объекта мы вызываем метод
                //     $result = $controllerObject->$actionName();
                // }

            }
        }



    }

    private function getURI()
    {
        if (!empty($_SERVER['REQUEST_URI'])) {
            return trim($_SERVER['REQUEST_URI'], '/');
        }
    }




}
