<?php




function Model(){
    $arr_some = Array(
        'age'=>24,
        'name'=>"Vladislav",
        'title'=>'Cool',
        'body'=>"Some text",
        'footer' => '2023',
    );
 return $arr_some;
};

function View($tpl,$data) {
    extract($data);
    //var_dump($age);
    ob_start();
    include $tpl;
    $result = ob_get_contents();
    ob_get_clean();
    var_dump($result);
    return $result;
};

function Controller() {
    //$res = Model();
    $res = Model();
    $some_res = View('some.tpl',$res);
    var_dump($some_res);
    
};

Controller();


//moostage
//шаблонизация
?>
