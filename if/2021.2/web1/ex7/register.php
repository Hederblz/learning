<?php

$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$sport = $_POST['sport'];
$email = $_POST['email'];
$senha = $_POST['senha'];

$pdo = new PDO("mysql:dbname=prova_web;host= heder,martin123@#;");

$sql = "insert into users(nome, sobrenome, sport, email, senha) values ('$nome','$sobrenome','$sport','$email','$senha')";
$pdo->exec($sql);

header('location: index.php?msg=usuario registrado');


?>