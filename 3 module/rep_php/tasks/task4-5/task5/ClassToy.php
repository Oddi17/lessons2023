<?php 

class Toy {
    private $_symbol;
    
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




