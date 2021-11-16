package av2_ex2;

import av1_ex2.Piloto;

import java.util.ArrayList;
import java.util.List;

public class Veiculo {
    private String fabricante;
    private String modelo;
    private int anodeFabricacao;
    private List<Motor> motors = new ArrayList<>();

    public void adicionarMotor(Motor motor){
        this.motors.add(motor);
    }

    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getAnodeFabricacao() {
        return anodeFabricacao;
    }

    public void setAnodeFabricacao(int anodeFabricacao) {
        this.anodeFabricacao = anodeFabricacao;
    }
}
