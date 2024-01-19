<?php

require_once "__DIR__/../lib/DataBase.php";
class ModelPage {
    //todo: read file in massive

    // const SQL_SELECT_ALL_QUESTIONS = ' select q.id num, q."name" question , true status, q.dt_create , a."comment" , u.surname q_user, answ_u.surname a_user
    //                                     from question q , answer a , myuser u , myuser answ_u
    //                                     where q.id =a.id_question 
    //                                     and q.id_user  = u.id 
    //                                     and a.id_user = answ_u.id'; 
    const SQL_SELECT_ALL_QUESTIONS = 'select q.id num, q."name" question, q.dt_create , u.surname q_user
                                        from question q , myuser u where q.id_user  = u.id'; 
    public function getListQuestion() {
        $db = new DataBase();
        $data = $db->getDataBase(ModelPage::SQL_SELECT_ALL_QUESTIONS);
        return $data;
}
const SQL_COUNT_QUESTIONS = 'select count(*) cnt from question';

public function getCounter() {
    $db = new DataBase();
    $data = $db->getDataBase(ModelPage:: SQL_COUNT_QUESTIONS);
    return $data;
}
}