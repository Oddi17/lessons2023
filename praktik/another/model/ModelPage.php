<?php

require_once "__DIR__/../lib/DataBase.php";
class ModelPage {
    //todo: read file in massive

    // const SQL_SELECT_ALL_QUESTIONS = ' select q.id num, q."name" question , true status, q.dt_create , a."comment" , u.surname q_user, answ_u.surname a_user
    //                                     from question q , answer a , myuser u , myuser answ_u
    //                                     where q.id =a.id_question 
    //                                     and q.id_user  = u.id 
    //                                     and a.id_user = answ_u.id'; 
    // const SQL_SELECT_ALL_QUESTIONS = 'select q.id num, q."name" question, q.dt_create , u.surname q_user
    //                                     from question q , myuser u where q.id_user  = u.id';
    
    const SQL_SELECT_ALL_QUESTIONS = 'select q.id num, q."name" question , true status, q.dt_create , a."comment", m.surname,answ_u.surname answ_surname 
                                        from question q left JOIN answer a 
                                        on q.id =a.id_question
                                        inner join myuser m
                                        on q.id_user = m.id
                                        left join myuser answ_u
                                        on a.id_user = answ_u.id
                                        order by q.id';
    public function getListQuestion() {
        $db = new DataBase();
        $data = $db->getDataBase(ModelPage::SQL_SELECT_ALL_QUESTIONS);
        //var_dump($data);
        
        //echo '<pre>'; print_r($data);echo '</pre>';
        //exit();

        return $data;
}
const SQL_COUNT_QUESTIONS = 'select count(*) cnt from question';

public function getCounter() {
    $db = new DataBase();
    $data = $db->getDataBase(ModelPage:: SQL_COUNT_QUESTIONS);
    return $data;
}
const INSERT_QUESTION = 'insert into question(id_user,name,dt_create) values (:id_user,:name,now())';

public function addQuestion($question){
    try {
        $db = new DataBase();
        $data = Array('id_user'=>4,'name'=>$question);
        $db->setBasePrepare(self::INSERT_QUESTION, $data);
        return json_encode(['code'=>200]);
    } catch (Exception $e){
        return json_encode(['code'=>500,'message'=>$e->getMessage()]);
    }
    

}

const INSERT_ANSWER = 'insert into answer(id_user,id_question,comment,dt_create) values (:id_user,:id_question,:comment,now())';
public function addAnswer($id_question,$answer){
    exit();
    try {
        $db = new DataBase();
        $data = Array('id_user'=>5,'id_question'=>$id_question,'comment'=>$answer);
        $db->setBasePrepare(self::INSERT_ANSWER, $data);
        return json_encode(['code'=>200]);
    } catch (Exception $e){
        return json_encode(['code'=>500,'message'=>$e->getMessage()]);
    }
    

}

}