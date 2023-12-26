<?php

class MyPDO extends PDO
{

    const PARAM_host = 'localhost';
    const PARAM_port = '5432';
    const PARAM_db_name = 'postgres';
    const PARAM_user = 'root';
    const PARAM_db_pass = '';

    public function __construct($options = null)
    {
        parent::__construct('pgsql:host=' . MyPDO::PARAM_host . ';port=' . MyPDO::PARAM_port . ';dbname=' . MyPDO::PARAM_db_name,
            MyPDO::PARAM_user,
            MyPDO::PARAM_db_pass, $options);
    }
    public function query($query)
    {
        $args = func_get_args();
        array_shift($args);

        $reponse = parent::prepare($query);
        $reponse->execute($args);
        return $reponse;    

    }

    public function insecureQuery($query)
    { //you can use the old query at your risk ;) and should use secure quote() function with it
        return parent::query($query);
    }

}

$db = new MyPDO();
$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

$ret = $db->query("SELECT 1 as id union SELECT 2 as id");

while ($o = $ret->fetch()) {
    echo $o->nom . PHP_EOL;
}



