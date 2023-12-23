<?php
require_once "./ClassChristmasTree.php";


if (isset($_POST['tree'])) {
    $tree = $_POST['tree'];
    $tree_symbol = $tree['symbol'];
    $tree_height = $tree['height'];
    $Tree = createTree($tree_symbol, $tree_height);
    $positionsElem = $Tree->positionsElem;
    $positionsElem = json_encode($positionsElem);

    if ($_POST['toy']['symbol'] != null) {
        $toy = $_POST['toy'];
        $toySymbol = $toy['symbol'];
        $objToy = new Toy();
        $objToy->setSymbol($toySymbol);
        $quantityToys = $toy['quantity'];
        $Tree->AddMoreToys('add', $objToy, $quantityToys);
        $tree_draw = drawTree($draw = true, $Tree);
    }
}

@include 'Tree.tpl';

function createTree($symbol, $height)
{
    if (!$symbol || !$height) {
        return;
    }
    $Tree = new ChristmasTree($symbol, $height);
    return $Tree;
}

function drawTree($draw, $tree)
{
    if ($draw) {
        return $tree->DrawTree($draw);
    }
}






