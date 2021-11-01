<?php 

$cnpj = $_GET['cnpj'];

$conteudo = '';

$file = fopen('times.csv', 'r');
while($linha = fgets($file)){
    $parts = explode(',', $linha);
    if ($parts[0] != $cnpj){
        $conteudo = $conteudo . $linha;
    }
}

file_put_contents('times.csv', $conteudo);

header("location: table.php");

?>
