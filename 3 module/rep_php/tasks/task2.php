<?php

$your_num = 133244459;

$num_str = strval($your_num);


$arr_count = [
    '0'=> 0,
    '1'=> 0,
    '2'=> 0,
    '3'=> 0,
    '4'=> 0,
    '5'=> 0,
    '6'=> 0,
    '7'=> 0,
    '8'=> 0,
    '9'=> 0,
];

foreach($arr_count as $key => &$value) {

    for ($i=0;$i<strlen($num_str);$i++){
        $key == $num_str[$i] ? $value++ : '' ; 
        //echo $value."\n";
    }
    echo "{$key} - {$value}"."\n";
}

