<?php

$email = $_POST['email'];
$senha = $_POST['senha'];


$pdo = new PDO("mysql:dbname=prova_web;","root","");
$sql = "select * from users where email = '$email' and senha = '$senha'";

$result = $pdo->query($sql);

$user = $result->fetch();

if($user == false){
    header('location: index.php?msg=usuario ou senha incorreto');
    exit();
}

session_start();

$_SESSION['auth'] = true;
$_SESSION['id'] = $user['id'];
$_SESSION['nome'] = $user['nome'];
$_SESSION['sobrenome'] = $user['sobrenome'];
$_SESSION['sport'] = $user['sport'];

header('location: home.php');
?>