<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>array1</title>
</head>
<body>
    <?php 

    $time = [];
    $time[0] = ['Liverpool','50','Anfield','ENG'];
    $time[1] = ['Barcelona','50','Camp Nou','ESP'];
    $time[2] = ['Milan','50','San Siro','ITA'];
    $time[3] = ['Manchester United','50','Old Trafford','ENG'];
    $time[4] = ['Real Madrid','50','Santiago Bernabéu','ESP'];
    $time[5] = ['Chelsea','50','Stamford Bridge','ENG'];
    $time[6] = ['Inter de Milão','50','Giuseppe Meazza','ITA'];
    $time[7] = ['Atlético de Madrid','50','Wanda Metropolitano','ESP'];
    $time[8] = ['Juventus','50','Juventus Stadium','ITA'];
    $time[9] = ['Manchester City','50','Etihad Stadium','ENG'];

    ?>
    <h2>Times da Europa</h2>
    <ol>
        <li><?php echo $time[0][0]; ?></li>
        <li><?php echo $time[1][0]; ?></li>
        <li><?php echo $time[2][0]; ?></li>
        <li><?php echo $time[3][0]; ?></li>
        <li><?php echo $time[4][0]; ?></li>
        <li><?php echo $time[5][0]; ?></li>
        <li><?php echo $time[6][0]; ?></li>
        <li><?php echo $time[7][0]; ?></li>
        <li><?php echo $time[8][0]; ?></li>
        <li><?php echo $time[9][0]; ?></li>
    </ol>
    <table border="2" width="500">
        <tr align="center">
            <td>Times</td>
            <td>Títulos</td>
            <td>Estadio</td>
            <td>País</td>
        </tr>
        <tr align="center">
            <td><?php echo $time[0][0] ?></td>
            <td><?php echo $time[0][1] ?></td>
            <td><?php echo $time[0][2] ?></td>
            <td><?php echo $time[0][3] ?></td>
        </tr>
        <tr align="center">
            <td><?php echo $time[1][0] ?></td>
            <td><?php echo $time[1][1] ?></td>
            <td><?php echo $time[1][2] ?></td>
            <td><?php echo $time[1][3] ?></td>
        </tr>
        <tr align="center">
            <td><?php echo $time[2][0] ?></td>
            <td><?php echo $time[2][1] ?></td>
            <td><?php echo $time[2][2] ?></td>
            <td><?php echo $time[2][3] ?></td>
        </tr>
        <tr align="center">
            <td><?php echo $time[3][0] ?></td>
            <td><?php echo $time[3][1] ?></td>
            <td><?php echo $time[3][2] ?></td>
            <td><?php echo $time[3][3] ?></td>
        </tr>
        <tr align="center">
            <td><?php echo $time[4][0] ?></td>
            <td><?php echo $time[4][1] ?></td>
            <td><?php echo $time[4][2] ?></td>
            <td><?php echo $time[4][3] ?></td>
        </tr>
        <tr align="center">
            <td><?php echo $time[5][0] ?></td>
            <td><?php echo $time[5][1] ?></td>
            <td><?php echo $time[5][2] ?></td>
            <td><?php echo $time[5][3] ?></td>
        </tr>
        <tr align="center">
            <td><?php echo $time[6][0] ?></td>
            <td><?php echo $time[6][1] ?></td>
            <td><?php echo $time[6][2] ?></td>
            <td><?php echo $time[6][3] ?></td>
        </tr>
        <tr align="center">
            <td><?php echo $time[7][0] ?></td>
            <td><?php echo $time[7][1] ?></td>
            <td><?php echo $time[7][2] ?></td>
            <td><?php echo $time[7][3] ?></td>
        </tr>
        <tr align="center">
            <td><?php echo $time[8][0] ?></td>
            <td><?php echo $time[8][1] ?></td>
            <td><?php echo $time[8][2] ?></td>
            <td><?php echo $time[8][3] ?></td>
        </tr>
        <tr align="center">
            <td><?php echo $time[9][0] ?></td>
            <td><?php echo $time[9][1] ?></td>
            <td><?php echo $time[9][2] ?></td>
            <td><?php echo $time[9][3] ?></td>
        </tr>
    </table>
</body>
</html>