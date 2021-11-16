package aula8_herança;

public class Automovel {
    private String fabricante;
    private String modelo;
    private int ano;
    private String placa;
    private String chassi;
    private double precoLotacao;


    public boolean precoLotacao(boolean arCondicionado, boolean gps){
        if(arCondicionado == true){
            precoLotacao = 10 + precoLotacao;
        }
        if(gps == true){
            precoLotacao = 10 + precoLotacao;
        }
        return true;
    }
    public boolean precoLotacao(boolean seguro){
        boolean arCondicionado = true;
        boolean gps = true;
        if(arCondicionado == true){
            precoLotacao = 10 + precoLotacao;
        }
        if(gps == true){
            precoLotacao = 10 + precoLotacao;
        }
        if(seguro == true){
            precoLotacao = 10 + precoLotacao;
        }
        return true;
    }

    public double getPrecoLotacao() {
        return precoLotacao;
    }

    public void setPrecoLotacao(double precoLotacao) {
        this.precoLotacao = precoLotacao;
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

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public String getChassi() {
        return chassi;
    }

    public void setChassi(String chassi) {
        this.chassi = chassi;
    }

}
