
<?php 

$cnpj = $_POST['cnpj'];
$time = $_POST['time'];
$titulos = $_POST['titulos'];
$estadio = $_POST['estadio'];
$pais = $_POST['pais'];

$file = fopen('times.csv', 'r');
while($linha = fgets($file)){
    $parts = explode(',', $linha);
    if($parts[0] == $cnpj){
        echo "CNPJ já cadastrado";
        exit();
    }
}

$file = fopen('times.csv', 'a');
fwrite($file, "$cnpj,$time,$titulos,$estadio,$pais\n");

?>

<h2>Time inserido</h2>

<a href="table.php">Home</a>
<a href="form.html">Add</a>

<p>CNPJ: <?= $cnpj; ?></p>
<p>Time: <?= $time; ?></p>
<p>Titulos: <?= $titulos; ?></p>
<p>Estadio: <?= $estadio; ?></p>
<p>País: <?= $pais; ?></p>



