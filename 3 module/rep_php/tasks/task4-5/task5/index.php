<?php
require_once "./ClassChristmasTree.php";


if (isset($_POST['tree'])) {
    $tree= $_POST['tree'];
    $tree_symbol = $tree['symbol'];
    $tree_height = $tree['height']; 
    $Tree = createTree($tree_symbol,$tree_height);
    $tree_params = $Tree->getParams();
    // var_dump($tree_params);

    $toy = $_POST['toy'];
    $toySymbol = $toy['symbol'];
    
    $objToy = new Toy();
    $objToy->setSymbol($toySymbol);
    $quantityToys = $toy['quantity'];
    
    // $Tree->AddDelToy('add',$objToy);
    $Tree->AddMoreToys('add',$objToy,$quantityToys);
    // var_dump($Tree);
    $tree_draw = drawTree($draw=true,$Tree);

    // if (isset($_POST['params_tree'])) {
    //     $tree_params = $Tree->getParams();
    //     var_dump($tree_params);
    // }
    
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

function makeToy($symbol,$tree){


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






