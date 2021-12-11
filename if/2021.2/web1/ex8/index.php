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
    <h1>Adicionar Times</h1>
    <form action="create.php" method="POST">
        <br>
        CNPJ : <input type="number"  name="cnpj" required>
        Equipe : <input type="text" name="equipe"> 
        Titulos : <input type="number" name="titulos">
        Estadio : <input type="text" name="estadio">
        País : <input type="text" name="pais">
        <input type="submit" value="Adicionar">
    </form>
    </div>
    <div>
        <h1>Deletar</h1>
        <form action="delete.php" method="POST">
            CNPJ : <input type="number"  name="cnpj">
            <input type="submit" value="Deletar">
        </form>
    </div>
    <div>
        <h1>Lista</h1>
        <a href="lista.php">Lista</a>
    </div>
    <div>
    <h1>mudar</h1>
    <form action="mudar.php" method="POST">
        <br>
        CNPJ para mudar : <input type="number"  name="mudar" required>
        CNPJ : <input type="number"  name="cnpj" required>
        Equipe : <input type="text" name="equipe"> 
        Titulos : <input type="number" name="titulos">
        Estadio : <input type="text" name="estadio">
        País : <input type="text" name="pais">
        <input type="submit" value="Mudar">
    </form>
    </div>
    
    
</body>
</html>