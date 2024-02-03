<!doctype html>
<html lang="en">
<head>
    <script src="../assets/js/axios.min.js"></script>
    <script src="../assets/js/app.js"></script>
    <script src="../assets/js/answer.js"></script>
    
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<h1>Вопросы и ответы</h1>
<span>Количество вопросов:</span><span id="counter">?</span>
<div id = "contaner">
    <?php $prev = 0;?>
    <?php foreach($result as $value): ?>
        <?php if ($prev !== $value['num']) { ?>
            <?php if ($prev !== $value['num'] && $prev !==0) { ?>
                
                </ul></div></li></ul></div></section>       
            <?php }; ?>
            
            <div class="question">
                <span>Question:</span>
                <section id="row-<?= $value['num']; ?>" data-id="<?= $value['num']; ?>">
                    
                    <ul>
                        <li>
                            <section class="give-answer">
                                <form data-id="<?= $value['num']; ?>" id="form-answ" onsubmit="addAnswer(); return false;">
                                    <textarea name="comment" id="comment" placeholder="Введите ответ"></textarea>
                                    <input type="hidden" value="<?= $value['num']; ?>" name="id_question">
                                    <button id="button-answer" type = "submit">Отправить</button>
                                </form>
                            </section>
                        </li>
                        <li><span>Number:<?= $value['num']; ?></span> </li>
                        <li><span> <?= $value['question']; ?></span> </li>
                        <li><span>Status: <?= $value['status']; ?></span></li>
                        <li>
                            <div class="answer">
                                <span>Answers:</span>
                                <ul>
                                    <li><span><?= $value['comment']; ?></span></li>
                                    <?php }else {?>
                                        <li><span><?= $value['comment']; ?></span></li>
                                    <?php }; ?>
            
    <?php  $prev = $value['num'];?>    
    <?php endforeach; ?>
</div>

    
</body>
</html>
