<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AV1</title>
</head>
<body>
    <div>
    <h1>Entrar</h1>
    <form action="auth.php" method="POST">
            E-mail : <input type="email" name="email" placeholder="E-mail">
            Senha : <input type="password" name="senha" placeholder="Senha">
            <input type="submit" value="Entrar">
    </form>
    </div>

    <div>
    <h1>Cadastro</h1>
    <form action="register.php" method="POST">
        Nome :<input type="text"name="nome"placeholder="Nome"maxlength="40">
        Sobrenome :<input type="text"name="sobrenome"placeholder="Sobrenome"maxlength="40">
        Time :<input type="text"name="sport"placeholder="Time"maxlength="40">
        E-mail :<input type="email"name="email"placeholder="E-mail" maxlength="40">
        Senha :<input type="password"name="senha"placeholder="Senha"maxlength="40">
            <input type="submit" value="Criar">
    </form>
    </div>

<?php 

?>
</body>
</html>