package av1_ex1;

import java.util.ArrayList;

public class Militar {

    private ArrayList<Arma> armas;

    private String name;
    private String nomeDeGuerra;
    private String patente;
    private String pertence;

    public Militar(){
        armas = new ArrayList<Arma>();
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNomeDeGuerra(String nomeDeGuerra) {
        this.nomeDeGuerra = nomeDeGuerra;
    }

    public void setPatente(String patente) {
        this.patente = patente;
    }

    public void setPertence(String pertence) {
        this.pertence = pertence;
    }

    public String getName() {
        return name;
    }

    public String getNomeDeGuerra() {
        return nomeDeGuerra;
    }

    public String getPatente() {
        return patente;
    }

    public String getPertence() {
        return pertence;
    }

    public void adcionarArma(Arma arma){
        this.armas.add(arma);
    }

    public int quantidadedeArmas(){
        return armas.size();
    }

    public  Arma getArma(int posicao){
        return armas.get(posicao);
    }
}
