<a href="index.php">HOME</a>

<?php
    include "conexao.php";

    $mudar = $_POST['mudar'];
    $cnpj = $_POST['cnpj'];
    $equipe = $_POST['equipe'];
    $titulos = $_POST['titulos'];
    $estadio = $_POST['estadio'];
    $pais = $_POST['pais'];

   $sql = "UPDATE equipes  SET `cnpj`='$cnpj',`equipe`='$equipe',`titulos`='$titulos',`estadio`='$estadio',`pais`='$pais' where cnpj='$mudar'";


    if(mysqli_query($conn, $sql)){
        echo "$equipe Trocado";
    }else{
        echo "$equipe NÃO deu";
    }
    ?>