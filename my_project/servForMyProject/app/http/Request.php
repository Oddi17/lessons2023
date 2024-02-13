<?php 

namespace orderproject\http;


interface iWrapperArray {
    public function get($key);
    public function set($key,$value);

    public function has($key);


}


class WrapperArray implements iWrapperArray {
    private $arr;
    function __construct($arr){
        $this->arr = $arr;
    }
    public function get($key){
        if($this->has($key)) return $this->arr[$key];
        return null;
    }
    public function set($key,$value){
        $this->arr[$key] = $value;
    }
    public function has($key){
        return isset($this->arr[$key]);

    }
}

class Request {
    public $query,$post;
    // public $post;
    function __construct(){
        $this->query = new WrapperArray($_GET);
        $this->post = new WrapperArray($_POST);
    }
}
