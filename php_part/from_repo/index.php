<?php




echo "Stage1"; // уровень отладки кода


function render($data) {
    echo $data;
}
// Контроллер
function controller_index(){
    $res = model();
    $v = view($res,'form_login.tpl');
    render($v);
}
// Mодель
function model() {
      // 1. Получить данные от сервера БД, файла,
      //http , сайта, API
    $arr = ['title'=> 'О нас','name'=>"Alisa"];
    return $arr;
}
echo "Stage2";  // уровень отладки кода
// Представление
function view($data,$tpl){
    extract($data);
    $title = '<h1>'. $data['title'] . '</h1>';
    ob_start();
       @include $tpl;
    $form = ob_get_contents();
    ob_get_clean();
    return $title. $form;
}

try {
    $_GET['action']();
} catch (Exception $e) {
    echo "Не задан актион";  // уровень отладки кода
}

echo "Stage4";  // уровень отладки кода