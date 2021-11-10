package aula6_herança;

public class VeiculodePasseio extends Veiculo{
    private boolean arCondicionado;
    private int porta;

    public boolean isarCondicionado() {
        return arCondicionado;
    }

    public void setarCondicionado(boolean ar_condicionado) {
        this.arCondicionado = ar_condicionado;
    }

    public int getPorta() {
        return porta;
    }

    public void setPorta(int porta) {
        this.porta = porta;
    }
}
