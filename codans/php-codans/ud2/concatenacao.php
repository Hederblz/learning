<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>contatenacao</title>
</head>
<body>
    <?php
    $nome = 'Jorge';
    $cor = 'verde';
    $idade = 25;

   //operador
    
        echo 'ola ' . $nome .', vi que sua cor favoria é '. $cor .', estou vendo tambem que sua idade é '.$idade;

        echo '<br />';

        echo "ola $nome, sua cor favorita eh $cor e sua idade eh $idade";
    ?>
</body>
</html>