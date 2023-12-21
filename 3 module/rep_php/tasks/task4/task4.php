<?php

$signTree = "*";
$n = 5;
$tree = "";

for ($i=1;$i<=$n;$i++){
    $count_space = $n-$i;
    $tree .= str_repeat(" ",$count_space).str_repeat($signTree." ",$i)."\n";
}

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

//var_dump($positions);

for ($j=0;$j<$treeToys;$j++) {
    $posit = rand($positions[0],end($positions));
    if (in_array($posit,$positions) && $tree[$posit] == $signTree) {
        $tree[$posit] = $signToys; 
    } else {
        $tree[strpos($tree,$signTree,$posit)] = $signToys;
    }

}
echo $tree;