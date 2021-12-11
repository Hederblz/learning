<?php
    require_once 'classes/usuarios.php';
    $u = new Usuario;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
    <link rel="stylesheet" href="style/global.css">
</head>
<body>
    <div class="voltar">
        <a href="index.php">Voltar</a>
    </div>
    <div id="corpo-form">
    <h1>Cadastro</h1>
    <form method="POST">
            E-mail :<input type="email"name="email"placeholder="E-mail" maxlength="40">
            Senha :<input type="password"name="senha"placeholder="Senha"maxlength="40">
            Nome :<input type="text"name="nome"placeholder="Nome"maxlength="40">
            Telefone :<input type="text"name="telefone"placeholder="Telefone"maxlength="40">
            Time do coração :<input type="text"name="sport"placeholder="Time"maxlength="40">
            <input type="submit" value="Criar">
    </form>
    </div>

<?php 

if(isset($_POST['email']))
{
    $email = addslashes($_POST['email']);
    $senha = addslashes($_POST['senha']);
    $nome = addslashes($_POST['nome']);
    $telefone = addslashes($_POST['telefone']);
    $sport = addslashes($_POST['sport']);
    if(!empty($email)&&!empty($senha)&&!empty($nome)&&!empty($telefone)&&!empty($sport))
    {
        $u->conectar("projeto_login","127.0.0.1","heder","martin123@#");
        if($u->msgErro=="")
        {
            if($u->cadastrar($email,$senha,$nome,$telefone,$sport))
            { 
                ?>
                <div id="msg-sucesso">
                Cadastrado com sucesso
                </div>
                <?php
            }else
            {
                ?>
                <div class="msg-erro">
                Email ja cadastrado
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
                "Preencha os campos
                </div>
                <?php
    }
}


?>
</body>
</html>