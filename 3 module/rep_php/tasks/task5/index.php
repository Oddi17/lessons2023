<?php
require_once "./ClassChristmasTree.php";


if (isset($_POST['tree'])) {
    $tree= $_POST['tree'];
    $tree_symbol = $tree['symbol'];
    $tree_height = $tree['height']; 
    $Tree = createTree($tree_symbol,$tree_height);

    $draw = true;
    $tree_draw = drawTree($draw,$Tree);
    if (isset($_GET['params_tree'])) {
        $get_params= $_GET['params_tree'];
        var_dump($get_params);
        
        $tree_params = $Tree->getParams();
        var_dump($tree_params);
    }
    // if (isset($_POST['draw'])){
    //     $draw = $_POST['draw'];
    //     $tree_draw = drawTree($draw,$Tree);
    //     echo $tree_draw;
    // };
} 

@include 'Tree.tpl';

function createTree ($symbol,$height) {
    if (!$symbol || !$height) {
        return;
    } 
    $Tree = new ChristmasTree($symbol,$height);
    return $Tree;
}

function drawTree($draw,$tree){
    if ($draw) {
        return $tree->DrawTree($draw);
    }
}


// drawTree($draw);

// <input name="garland" id="garland" type="hidden" value="true"> 
// <button type="submit">Вкл гирлянду</button>
// $Ball = new Toy();
// $Ball->setSymbol('*');
// $FirstTree->AddDelToy('add',$Ball);
// $Yard = new Toy();
// $Yard->setSymbol('o'); 
// $FirstTree->AddDelToy('add',$Yard);
// $FirstTree->AddDelToy('add',$Yard);
// $FirstTree->AddDelToy('add',$Yard);
// $FirstTree->AddDelToy('add',$Yard);

// $FirstTree->AddDelToy('Del',$Yard);
// $FirstTree->DrawTree(true);






