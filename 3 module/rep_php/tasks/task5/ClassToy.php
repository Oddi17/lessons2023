<?php 

class Toy {
    private $_symbol;

    // public function __construct($symbol){
    //     $this->_symbol = $symbol;
    // }
    
    public function getParams(){
        return Array(
            'symbol' => $this->_symbol,
        );
    }
    public function ShowParams(){
        echo 'Symbol: '.$this->_symbol."\n";
    }
    public function setSymbol($symbol){
        $symbol = strval($symbol);
        $this->_symbol = $symbol;
    }
    public function DrawToys($draw){
        if ($draw) {
             
        }else{

        };
    } 
}





// $Ball = new Toy();

// //var_dump($Ball);

// $Ball->ShowParams();
// $Ball->setSymbol('*');
// $Ball->ShowParams();

// $elem = $Ball->getParams();
// print_r($elem);

// echo "Elem:".$elem['symbol'];



//var_dump($Ball->getParams());

//$some_of_ball = $Ball->getParams();

//var_dump($some_of_ball);


