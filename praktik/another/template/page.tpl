<!doctype html>
<html lang="en">
<head>
    <script src="../assets/js/axios.min.js"></script>
    <script src="../assets/js/app.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<span>Количество вопросов:</span>
<span id="counter">?</span>
<h1>Задай вопрос</h1>
<div id = "contaner">
    <?php foreach($result as $value): ?>
    <section id="row-<?= $value['num']; ?>" data-id="<?= $value['num']; ?>">
        <div><span><?= $value['num']; ?>
            </span> <span> <?= $value['question']; ?>
            </span> <span> <?= $value['status']; ?></span>
        </div>
    </section>
    <?php endforeach; ?>
</body>
</html>
