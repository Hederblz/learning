<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <div>
        <a href="index.php">Voltar</a>
    </div>
    <div>
    <?php
    include "conexao.php";

    $cnpj = $_POST['cnpj'];
    $equipe = $_POST['equipe'];
    $titulos = $_POST['titulos'];
    $estadio = $_POST['estadio'];
    $pais = $_POST['pais'];

    $sql = "INSERT INTO `equipes`(`cnpj`, `equipe`, `titulos`, `estadio`, `pais`) VALUES ('$cnpj','$equipe','$titulos','$estadio','$pais')";

    if(mysqli_query($conn, $sql)){
        echo "$equipe cadastrada";
    }else{
        echo "$equipe NÃO cadastrada";
    }
    ?>
    </div>
    
</body>
</html>