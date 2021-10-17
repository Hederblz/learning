<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>atividade 2</title>
</head>
<body>
    <?php 

    $arquivo = file('dados.txt');

    $time = fopen('times.csv', 'r');
    
    ?>

    <h2>Times da Europa</h2>

    <ol>
        <?php foreach($arquivo as $imprime): ?>
        <li>
            <?php print_r($imprime); ?> 
        </li>
        <?php endforeach ?>
    </ol>


    <table border="2" width="500">

        <tr align="center">
            <td>Times</td>
            <td>Títulos</td>
            <td>Estadio</td>
            <td>País</td>
        </tr>
        <?php 

        while (true):
            $linha = fgets($time);
            if($linha === false){   
                break;
            }
        
        $partes = explode(',', $linha);
        
        ?>

        <tr align="center">
        <?php foreach($partes as $dados): ?>
            <td><?= $dados ?></td>
    <?php endforeach ?>
        </tr>
    <?php endwhile ?>
        
    </table>

    </body>
</html>