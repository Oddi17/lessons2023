<?php
   // $count = isset($_COOKIE['count']) ? $_COOKIE['count'] : 0 ;
   // $count++;
   // // for($i = 0; $i < 45000 ; $i++){
   // //    setcookie("$i");
   // //    setcookie("$i", $i*2);
   // // }
   // setcookie('is_auth', True, time() + 60*60*24);
   // echo "Вы зашли на страницу:". $count;

   //sessions
   $path = './session';
   session_save_path($path);
   session_start();
   $_SESSION['login'] = 'admin';
   $_SESSION['passwd'] = 123;
   $_SESSION['arr_num'] = [1,2,3,4,3];


   if (isset($_GET['logout']) && $_GET['logout'] == 1 ) {
      logout();
   };

   function logout() {
      session_destroy();
   }

   // $f = 'logout';
   // $f();
