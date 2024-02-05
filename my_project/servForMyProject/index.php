<?php
header('Access-Control-Allow-Origin: http://localhost:5173');


define('ROOT', dirname(__FILE__));
ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . '/vendor/autoload.php';

// require_once (ROOT . '/components/Router.php');

use orderproject\components\Router;

use orderproject\Routes;

$routesClass = new Routes();


$routes_arr = $routesClass::getRoutes();

// - создаем экземпляр класса Router
$router = new Router($routes_arr);

// и запускаем метод run(), тем самым, передав на него управление
$router->run();


//echo 'your request: ' . $_SERVER['REQUEST_URI'];



exit;



// header('Access-Control-Allow-Origin: *');
// header('Content-Type: application/json');


header('Access-Control-Allow-Origin: http://localhost:5173');
// header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    try{
        if (isset($_POST['email']) && isset($_POST['password'])) {
            $data = [$_POST['email'],$_POST['password']];
            // echo $dataPer;
            // var_dump($data);
            echo json_encode(['code'=>200,'email'=>$_POST['email'],'password'=>$_POST['password']]);
        }else {   
            // var_dump($_POST);
            echo json_encode(['code' => 400, 'message' => 'Invalid data']);
        }
    } catch (Exception $e){
        echo json_encode(['code'=>500,'message'=>$e->getMessage()]);
    }
}
