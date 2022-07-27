package av2_ex2;

public class Teste {
    public static void main(String[] args) {
        VeiculoPrototipo v1 = new VeiculoPrototipo();
        v1.setFabricante("BMW");
        v1.setModelo("300");
        v1.setAnodeFabricacao(2021);
        v1.setPecasEspeciais("isolante de agua");
        Motor m8 = new Motor();
        m8.setPotencia(50);
        m8.setFabricante("Gol");
        m8.setEletrico(false);
        v1.adicionarMotor(m8);
    }
}
