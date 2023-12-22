<?php
namespace fub;

// include 'pros1.php';
// include 'pros2.php';
// include 'pros3.php';
// use \dir\folder\foo;
// use bar as canine;
// use animate;

// echo \dir\folder\foo\Cat::says(), "<br />\n";
// echo canine\Dog::says(), "<br />\n";
// echo animate\Animal::breathes(), "<br />\n"; 

abstract class A {
    abstract function add();
}
class M extends A {
    public function get(){
        echo "get";
    }
    public function add(){
        echo "add";
    }
}
$d = new M(); 
$d->add();
$d->get();


function catch_class($name_class){
    echo $name_class;
}

spl_autoload_register('cath_class');


$s = new ABC();

