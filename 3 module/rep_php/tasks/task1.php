<?php
$arr = [2, 3, 12, 4, 0, -1, 3];

// $tek = $arr[0];

for($i=0;$i<count($arr);$i++) {
    $tek = $arr[$i];
    //echo "ZHACHENIE:".$tek."\n";
    for($k=1;$k<count($arr);$k++) {
        //echo $arr[$k]."\n";
        if ($tek > $arr[$k]) {
            $tek = $arr[$k];
        } 
    }
    //;
}
echo "NAIMENSHEE:".$tek;