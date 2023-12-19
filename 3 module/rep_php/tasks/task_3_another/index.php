<?php



function modelPage()
{
    //todo: Читает файл в массив
    $mass= array(
        array('Product name' => 'Apple MacBook Pro 17',
            'Color' => 'Silver',
            'Category' => 'Category',
            'Price' => '100 000',
            'Action' => 'Edit'),
        array('Product name' => 'Microsoft Surface Pro',
            'Color' => 'White',
            'Category' => 'Laptop PC',
            'Price' => '50 000',
            'Action' => 'Edit'),
        array('Product name' => 'Magic Mouse 2',
            'Color' => 'Black',
            'Category' => 'Accessories',
            'Price' => '10 000',
            'Action' => 'Edit'),
    
    );
    
    return $mass;
}

function render($data, $tpl)
{
    //var_dump($data);
    extract($data);
    ob_start();
    @include $tpl;
    //  echo "Stage1";
    $result = ob_get_contents();
    ob_get_clean();
    return $result;
    
}

function controllerPage()
{
    //echo "Stage100";
    $res = modelPage();
    //echo "Stage1";
    $res = Array('result' => $res);
    //echo "Stage2";
    //var_dump($res);
    echo render($res, 'table.tpl');
}

$action = 'controllerPage';
$action();



