package av1_ex2;

public class Piloto {

    private String nome;
    private String nacionalidade;
    private int experiencia;
    private int destrezaUltra;
    private int pericia;
    private int destrezaLargada;
    private int fisico;

    public Piloto(String nome, String nacionalidade, int experiencia, int destrezaUltra, int pericia, int destrezaLargada, int fisico) {
        this.nome = nome;
        this.nacionalidade = nacionalidade;
        this.experiencia = experiencia;
        this.destrezaUltra = destrezaUltra;
        this.pericia = pericia;
        this.destrezaLargada = destrezaLargada;
        this.fisico = fisico;
    }

    public String getNome() {
        return nome;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public int getExperiencia() {
        return experiencia;
    }

    public int getDestrezaUltra() {
        return destrezaUltra;
    }

    public int getPericia() {
        return pericia;
    }

    public int getDestrezaLargada() {
        return destrezaLargada;
    }

    public int getFisico() {
        return fisico;
    }
}
