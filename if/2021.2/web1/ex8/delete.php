<?php



include "conexao.php";

$cnpj = $_POST['cnpj'];


$sql = "DELETE from equipes where cnpj='$cnpj'";


if(mysqli_query($conn, $sql)){
    echo "$equipe Deletado";
}else{
    echo "$equipe NÃO Deletado";
}



?>

<div>
    <a href="index.php">Voltar</a>
</div>