<?php
require_once 'classes/usuarios.php';
$u = new Usuario;

?>

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
    <div id="corpo-form">
    <h1>Entrar</h1>
    <form method="POST">
            E-mail : <input type="email" name="email" placeholder="E-mail">
            Senha : <input type="password" name="senha" placeholder="Senha">
            <input type="submit" value="Entrar">
            <a href="cadastro.php">Cadastre-se</a>
    </form>
    </div>

<?php 
if(isset($_POST['email']))
{
    $email = addslashes($_POST['email']);
    $senha = addslashes($_POST['senha']);
    if(!empty($email)&&!empty($senha))
    {
        $u->conectar("projeto_login","127.0.0.1","heder","martin123@#");
        if($u->msgErro =="")
        {

            if($u->logar($email,$senha))
            {   
                header("location: home.php");
            }else
            {
                ?>
            <div class="msg-erro">
                    Email ou senha incorretos!
                    </div>
                    <?php

            }   
        }else
        {
            ?>
                <div class="msg-erro">
                <?php echo "Erro : ".$u->msgErro; ?>
                </div>
                <?php
        }
    }else
    {

        ?>
        <div class="msg-erro">
                Preencha os campos
                </div>
                <?php
    }
}
?>
</body>
</html>