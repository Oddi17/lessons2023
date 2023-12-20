<?php


$signTree = "*";
$n = 5;
$tree = "";


for ($i=1;$i<=$n;$i++){
    $count_space = $n-$i;
    $tree .= str_repeat(" ",$count_space).str_repeat($signTree." ",$i)."\n";
    //echo str_repeat(" ",$count_space).str_repeat($signTree." ",$i)."\n";
}
// echo $tree;


$treeToys = 3;
$signToys = "@";

$count = 0;

for($k = 0; $k<strlen($tree); $k++) {
    $pos = strpos($tree,$signTree,$count);
    if ($pos == $count){
        $positions[] = $pos;
    }
    $count++;

};

var_dump($positions);


//echo end($positions);


for ($j=0;$j<$treeToys;$j++) {
    $posit = rand($positions[0],end($positions));
    echo "RAND:".$posit."\n";
    echo "SYMBOL_DO:".$tree[$posit]."\n";
    if (in_array($posit,$positions) && $tree[$posit] != "@") {
        $tree[$posit] = $signToys; 
    } else {
        $tree[strpos($tree,$signTree,$posit)] = $signToys;
        echo "RAND+1:".(strpos($tree,$signTree,$posit))."\n";
        echo "SYMBOL_POSLE:".$tree[strpos($tree,$signTree,$posit)]."\n";
        // $tree[$posit+1] = $signToys;
    }

}

echo $tree;

// var_dump($positions);
// foreach ($positions as $value) {
//     echo $value."\n";
// }


// echo in_array(12,$positions);
// if (in_array(12,$positions)) {
    
// }


//$tree[4]="@";
//echo $tree;





// for($j=0;$j<3;$j++){
//     $position = rand(0,strlen($tree))
//     for ($k=0;$k<strlen($tree);$k++){
        
    
//     };
// }

//с помощью rand выбрать число в пределах возможных позиций * и поменять соответственно















