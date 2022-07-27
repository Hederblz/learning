package aula_extra;

public class Usuario {
    private String nome;
    private String login;
    private String senha;

    public boolean Login(String login, String senha){
        if (login.equals(this.login) && senha.equals(this.senha)){
            return true;
        }
        else{
            return false;
        }
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
