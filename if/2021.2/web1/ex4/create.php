
<?php 

$time = $_GET['time'];
$titulos = $_GET['titulos'];
$estadio = $_GET['estadio'];
$pais = $_GET['pais'];

$file = fopen('times.csv', 'a');

fwrite($file, "$time,$titulos,$estadio,$pais\n");

?>

<h2>Time inserido</h2>

<a href="table.php">Home</a>
<a href="form.html">Add</a>

<p>Time: <?= $time; ?></p>
<p>Titulos: <?= $titulos; ?></p>
<p>Estadio: <?= $estadio; ?></p>
<p>País: <?= $pais; ?></p>



