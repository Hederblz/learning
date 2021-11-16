package aula8_herança;

public class Teste {
    public static void main(String[] args) {
        AutoInter a1 = new AutoInter();
        a1.setPrecoLotacao(12);
        a1.setArCondicionado(true);
        a1.setGps(true);
        a1.precoLotacao(a1.isArCondicionado(),a1.isGps());
        System.out.println(a1.getPrecoLotacao());

        AutoLuxo bmw = new AutoLuxo();
        bmw.setSeguro(true);
        bmw.setPrecoLotacao(20);
        bmw.precoLotacao(bmw.isSeguro());
        System.out.println(bmw.getPrecoLotacao());

    }
}
