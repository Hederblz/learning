<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>variaveis</title>
</head>
<body>
    <?php
      
      //string
    $nome = 'Heder';

    //int
    $idade = 29;

    //float
    $peso = 63.4;

    //boolean
    $fumo = false;

    ?>

    <h1>Ficha cadastral</h1>
    <br/>
    <p>Nome : <?= $nome ?></p>
    <p>Idade : <?= $idade ?></p>
    <p>Peso : <?= $peso ?></p>
    <p>Fumante : <?= $fumo ?></p>
    
</body>
</html>