package aula_extra;

public class Calculadora {
    private Usuario user;
    private String login = "";
    private String senha = "";

    public Calculadora(Usuario user){
        this.user = user;
    }

    public String teste(){
        if(this.user.Login(this.login,this.senha)){
            return "Continue";
        }
        else {
            return "O usuario não tem acesso";
        }
    }
    public boolean teste2(){
        if(this.user.Login(this.login,this.senha)){
            return true;
        }
        else {
            return false;
        }
    }

    public String Soma(double a, double b) {
        if(this.user.Login(this.login,this.senha)){
            return "A soma é : "+(a+b);
        }
        else {
            return "O usuario não tem acesso";
        }
    }

    public String Sub(double a, double b) {
        if(this.user.Login(this.login,this.senha)){
            return "A subtração é : "+(a-b);
        }
        else {
            return "O usuario não tem acesso";
        }
    }

    public String Mult(double a, double b) {
        if(this.user.Login(this.login,this.senha)){
            return "A multiplicação é : "+(a*b);
        }
        else {
            return "O usuario não tem acesso";
        }
    }

    public String Div(double a, double b) {
        if(this.user.Login(this.login,this.senha)){
            return "A divisão é : "+(a/b);
        }
        else {
            return "O usuario não tem acesso";
        }
    }

    public String Funcao(double a,double x, double b) {
        if(this.user.Login(this.login,this.senha)){
            return "A função ax + b é : "+((a*x)+b);
        }
        else {
            return "O usuario não tem acesso";
        }
    }

    public String Pot(double x, int p) {
        if(this.user.Login(this.login,this.senha)){
            double Result = 1;
            int contador = 0;
            while(contador != p){
                Result = Result * x;
                contador++;
            }
            return "A potencia é : "+ Result;
        }
        else {
            return "O usuario não tem acesso";
        }
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
