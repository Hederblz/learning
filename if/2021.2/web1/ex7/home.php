<?php

session_start();

if(!isset($_SESSION['auth']) || $_SESSION['auth'] !== true){
    header('location: index.php');
    exit();
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="style/global.css">
</head>
<body>
    <div class="voltar">
        <a href="sair.php">Sair</a>
    </div>
    <h1>Bem vindo <?php $_SESSION['nome']; ?></h1>
    <p>Proximo ano teu time <?php $_SESSION['sport']; ?> vai cair pra serie B.</p>
    
</body>
</html>