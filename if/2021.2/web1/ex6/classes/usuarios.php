<?php

class Usuario{
    private $pdo;
    public $msgErro = "";

    public function conectar($nome, $host, $usuario, $senha){
        global $pdo;
        global $msgErro;
        try{
            $pdo = new PDO("mysql:dbname=".$nome.";host=".$host,$usuario,$senha.";");
        }catch(PDOException $e){
            $msgErro = $e->getMessage();
        }
        

    }
    public function cadastrar($email,$senha,$nome,$telefone,$sport){
        global $pdo;
        global $msgErro;
        //verificar se esta cadastrado
        $sql = $pdo->prepare("SELECT id_usuario FROM usuarios WHERE email = :e");
        $sql->bindValue(":e",$email);
        $sql->execute();
        if($sql->rowCount() > 0){
            return false;//ja esta cadastrado
        }else{
            //não cadastrado
            $sql = $pdo->prepare("INSERT INTO usuarios(email,senha,nome,telefone,sport) VALUES(:e, :s, :n, :t, :p)");
            $sql->bindValue(":e",$email);
            $sql->bindValue(":s",md5($senha));
            $sql->bindValue(":n",$nome);
            $sql->bindValue(":t",$telefone);
            $sql->bindValue(":p",$sport);
            $sql->execute();
            return true;
        }

    }
    public function logar($email,$senha){
        global $pdo;
        global $msgErro;
        //verificar se o email e senha estao ok
        $sql = $pdo->prepare("SELECT id_usuario FROM usuarios WHERE email =  :e AND senha = :s");
        $sql->bindValue(":e",$email);
        $sql->bindValue(":s",md5($senha));
        $sql->execute();
        if($sql->rowCount() > 0){
            $dado = $sql->fetch();
            session_start();
            $_SESSION['id_usuario']=$dado['id_usuario'];
            return true;

        }else{
            return false;
        }

    } 

}












?>