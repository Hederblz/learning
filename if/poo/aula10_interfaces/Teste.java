package aula10_interfaces;

public class Teste {
    public static void main(String[] args) {
        Operario p1 = new Operario();
        p1.setNome("Heder");
        p1.setManusearFerramentas(true);
        p1.conserta();
        p1.pintarCarro();
        p1.supervisiona();

        Operario p2 = new Operario();
        p2.setNome("Matheus");
        p2.setManusearFerramentas(true);
        p2.setManipularTinta(true);
        p2.conserta();
        p2.pintarCarro();
        p2.supervisiona();

        Operario p3 = new Operario();
        p3.setNome("Barreto");
        p3.setManusearFerramentas(true);
        p3.setManipularTinta(true);
        p3.setAuxiliarMontagem(true);
        p3.conserta();
        p3.pintarCarro();
        p3.supervisiona();
    }
}
