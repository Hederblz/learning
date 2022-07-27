package av2_ex2;

public class Motor {
    private String fabricante;
    private int potencia;
    private boolean eletrico;

    public boolean isEletrico() {
        return eletrico;
    }

    public void setEletrico(boolean eletrico) {
        this.eletrico = eletrico;
    }

    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public int getPotencia() {
        return potencia;
    }

    public void setPotencia(int potencia) {
        this.potencia = potencia;
    }
}
