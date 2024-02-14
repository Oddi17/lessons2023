<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header("access-control-allow-credentials: true");

define('ROOT', dirname(__FILE__));
ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . '/vendor/autoload.php';

use orderproject\components\Router;
use orderproject\Routes;

$routesClass = new Routes();
$routes_arr = $routesClass::getRoutes();
$router = new Router($routes_arr);
$router->run();

exit;
