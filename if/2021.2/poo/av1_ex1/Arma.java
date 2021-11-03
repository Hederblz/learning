package av1_ex1;

public class Arma {

    private Militar militar;

    private String fabricante;
    private String tipo;
    private int calibre;
    private int capacidadeDeTiro;

    public Arma(String fabricante, String tipo, int calibre, int capacidadeDeTiro) {
        this.fabricante = fabricante;
        this.tipo = tipo;
        this.calibre = calibre;
        this.capacidadeDeTiro = capacidadeDeTiro;
    }

    public void setMilitar(Militar militar) {
        this.militar = militar;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public void setCalibre(int calibre) {
        this.calibre = calibre;
    }

    public void setCapacidadeDeTiro(int capacidadeDeTiro) {
        this.capacidadeDeTiro = capacidadeDeTiro;
    }

    public Militar getMilitar() {
        return militar;
    }

    public String getFabricante() {
        return fabricante;
    }

    public String getTipo() {
        return tipo;
    }

    public int getCalibre() {
        return calibre;
    }

    public int getCapacidadeDeTiro() {
        return capacidadeDeTiro;
    }
}
