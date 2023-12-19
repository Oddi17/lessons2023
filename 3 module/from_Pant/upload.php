<?php
/******************Файловая проверка*******************/
echo '<hr>';
echo 'Загрузка прошла успешно!';

$uploadDir = './upload';

move_uploaded_file($_FILES['file']['tmp_name'], $uploadDir . '/' . $_FILES['file']['name']);

echo '<pre>';
var_dump($_FILES);
echo '</pre>';
