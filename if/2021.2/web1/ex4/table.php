<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>atividade 4</title>
</head>
<body>
    <?php 
    $time = fopen('times.csv', 'r');
    
    ?>

    <h2>Times da Europa</h2>    

    <table border="2" width="500">

        <tr align="center">
            <td>Times</td>
            <td>Títulos</td>
            <td>Estadio</td>
            <td>País</td>
        </tr>
        <?php while($linha = fgets($time)): ?>

        <tr align="center">
        <?php $partes = explode(',', $linha) ?>
        <?php foreach($partes as $dados): ?>
            <td><?= $dados ?></td>
    <?php endforeach ?>
        </tr>
    <?php endwhile ?>
    
    </table>
    <a href="form.html">Add</a> 

    </body>
</html>