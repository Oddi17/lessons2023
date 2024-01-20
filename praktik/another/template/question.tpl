<!doctype html>
<html lang="en">
<head>
    <script src="../assets/js/axios.min.js"></script>
    
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>


<body>
<h1>Задай вопрос</h1>
<form id="form" onsubmit="addQuestion(); return false;">
    <input type="text" id="question" name="question">
    <input type="submit" value="Добавить">
</form>
<span id="q" style="display: none;">Вопрос добавлен</span>
<script src="../assets/js/question.js"></script>
<!-- <script>function helloWorld(){console.log('hell!')}</script> -->
</body>
</html>
