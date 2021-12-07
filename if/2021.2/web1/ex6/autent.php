<?php

session_start();

if($POST['pw']== '1234'){
    $_SESSION['auth']=true;
}else{
    $_SESSION['auth']=false;
}

header('location: home.php')


?>