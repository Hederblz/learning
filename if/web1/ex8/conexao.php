<?php

$server = "localhost";
$user = "root";
$pass = "";
$bd = "liga";

if ($conn = mysqli_connect($server,$user,$pass,$bd)){
   // echo "Conectado";
}else{
    echo "Erro";
}



?>