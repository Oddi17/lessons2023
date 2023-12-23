<?php
require_once "./ClassToy.php";


class ChristmasTree {
    private $_symbol;
    //private $_width;
    private $_height;
    private $_toysArray=[];
    private $_toysLimit;
    private $_garland;
    private $_positions; //позиции символов елки

    private $_tree;
    

    public function __construct($symbol,$height) {
        $symbol = strval($symbol);
        $this->_height = $height;
        $this->_symbol = $symbol;

        $tree = "";
        for ($i=1;$i<=$height;$i++){
            $count_space = $height-$i;
            $tree .= str_repeat("&nbsp;",$count_space).str_repeat($symbol."&nbsp;",$i)."<br />";
        }
         
        $count = 0;
        for($k = 0; $k<strlen($tree); $k++) {
            $pos = strpos($tree,$symbol,$count);
            if ($pos == $count){
                $this->_positions[] = $pos;
            }
            $count++;
        };
        $this->_toysLimit = count($this->_positions);
        $this->_tree = $tree;
    }

    public function getParams(){
        return Array(
            'height' => $this->_height,
            'symbol' => $this->_symbol,
            'toysLimit' => $this->_toysLimit,
            'toysArray' => $this->_toysArray
        );
    }
    public function ShowParams(){
        echo 'Height: '.$this->_height."\n";
        echo 'Symbol of Tree: '.$this->_symbol."\n";
        echo 'Limit of Toys: '.$this->_toysLimit."\n";
        if ($this->_toysArray) { echo 'Array of Toys: '.print_r($this->_toysArray)."\n";} ;
    }

    public function Garland($switch){
        //Должна мигать
        if ($switch) {
            $a='1';  
        }else{
            $a='0';
        };
    }
        
    
    public function DrawTree($draw){
        if ($draw) {
            // echo $this->_tree;
            return $this->_tree;
        }else{
        };
    }
    public function AddMoreToys ($move,Toy $toy,$quantity) {
        if ($move=='add' || $move=='Add') {
            if (count($this->_toysArray) > $this->_toysLimit){
                echo 'Лимит игрушек превышен!';
                return;
            } else {
                for ($j=0;$j<$quantity;$j++) {
                    $elem = $toy->getParams();
                    array_push($this->_toysArray,$elem['symbol']);
                    $posit = rand($this->_positions[0],end($this->_positions));
                
                    if (in_array($posit,$this->_positions) && $this->_tree[$posit] == $this->_symbol) {
                        $this->_tree[$posit] = $elem['symbol']; 
                        //TODO: также можно сделать добавление в массив игрушек и потом отдельно их отрисовывать с елочкой
                    } else {
                        $how = strpos($this->_tree,$this->_symbol,$posit);
                        $this->_tree[$how] = $elem['symbol']; 
                }
            }
                }
    }
}

    public function AddDelToy($move, Toy $toy){
        if ($move=='add' || $move=='Add') {
            if (count($this->_toysArray) > $this->_toysLimit){
                echo 'Лимит игрушек превышен!';
                return;
            } else {
                $elem = $toy->getParams();
                array_push($this->_toysArray,$elem['symbol']);
                $posit = rand($this->_positions[0],end($this->_positions));
                
                if (in_array($posit,$this->_positions) && $this->_tree[$posit] == $this->_symbol) {
                    $this->_tree[$posit] = $elem['symbol']; 
                    // echo $elem['symbol'];
                    //TODO: также можно сделать добавление в массив игрушек и потом отдельно их отрисовывать с елочкой
                } else {
                    $how = strpos($this->_tree,$this->_symbol,$posit);
                    
                    $this->_tree[$how] = $elem['symbol']; 
                    // echo $this->_tree;
                    // var_dump( $this->_toysArray);
                }
            }
        }elseif ($move=='del' || $move=='Del'){
            if (count($this->_toysArray) == 0) {
                return;
            } else {
                $elem = $toy->getParams();
                unset($this->_toysArray[array_search($elem['symbol'],$this->_toysArray)]);
                $this->_toysArray = array_values($this->_toysArray);
                $how = strpos($this->_tree,$elem['symbol']);
                $this->_tree[$how] = $this->_symbol;
            } 
        };   
    }
}


// $FirstTree = new ChristmasTree('#',5);

// $FirstTree->ShowParams();
// $FirstTree->DrawTree(true);
// $FirstTree->ShowParams();


//$Ball = new Toy();
//$Ball->setSymbol('*');
//$Ball->ShowParams();


