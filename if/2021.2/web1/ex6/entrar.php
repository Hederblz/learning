<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Entrar</title>
    <link rel="stylesheet" href="style/global.css">
</head>
<body>
    <div class="voltar">
        <a href="index.html" style="text-decoration:none">Voltar</a>
    </div>
    <form class="menu" action="autent.php" method="POST">
        <div>
            <br>
            Login : <input type="login" name="login" placeholder="login">
            Senha : <input type="password" name="pw" placeholder="senha">
        </div>
        <div>
            <br>
            <input type="submit" value="Entrar" class="submit">
        </div>
    </form>
</body>
</html>