


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    

    <h1>Lista</h1>
    <a href="index.php">HOME</a>
<div>
<?php

    include "conexao.php";

    $sql = "SELECT * from equipes ";
    $resultado = $conn->query($sql);
    
    
    while($data = mysqli_fetch_assoc($resultado)){
        echo "<tr>";
        echo"<td>" .$data['cnpj']. "<br>";
        echo"<td>" .$data['equipe']. "<br>";
        echo"<td>" .$data['titulos']. "<br>";
        echo"<td>" .$data['estadio']. "<br>";
        echo"<td>" .$data['pais']. "<br>";
        echo "<br><br>";
    }


    
    ?>
   </div>
    
</body>
</html>