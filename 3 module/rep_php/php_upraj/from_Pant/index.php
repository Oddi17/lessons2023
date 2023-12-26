<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="auth.css">
    <!--Подключаем шрифты Inter-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet">
    <title>Auth Form</title>
</head>
<body>
<section class="auth">
    <div class="container">
        <div class="content">
            <div class="title">Auth form</div>
            <div class="form">
                <!--<form action="auth.php" method="post">-->
                <!-- <form enctype="multipart/form-data" action=<?php $_action ?> method="post"> -->

                <form enctype="multipart/form-data" action="auth.php" method="post">
                    <div class="email-input">
                        <label for="email">Email address</label>
                        <input name="email" id="email" type="text">
                    </div>
                    <div class="password-input">
                        <div class="password-label">
                            <label for="password">Password</label>
                            <a href="" class="link">Forgot password?</a>
                        </div>
                        <input name="password" id='password' type="password">
                    </div>
                    <button class="sign-in-button" type="submit">Sign in</button>
                </form>

                <form enctype="multipart/form-data" action="upload.php" method="post" class="form-class">
                    <div class="file-input">
                        <div class="file-label">
                            <label for="file">Загрузите файл</label>
                        </div>
                        <input name="file" id='file' type="file">
                    </div>
                    
                    <button class="sign-in-button" type="submit">Отправить файл</button>
                </form>
            </div>
            <!-- <div class="footer">Not a member? <a href="" class="link">Start a 14 day free trial</a></div> -->
        </div>
    </div>
</section>
</body>
</html>
