package aula9_interfaces;

public class Atleta implements Alpinista, Surfista, Tenista{
    private String nome;
    private int idade;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public int surfando(){
        System.out.println("surfando");
        return 0;
    }

    public int escalar(){
        System.out.println("subindo");
        return 0;
    }
    public int quebraRaquete(){
        System.out.println("Quebrando");
        return 0;
    }
}
