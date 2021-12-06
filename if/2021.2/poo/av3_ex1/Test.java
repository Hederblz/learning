package av3_ex1;

public class Test {
    public static void main(String[] args) {
        Operario p1 = new Operario();
        p1.setNome("Heder");
        p1.setTarefasAuxiliares(true);
        p1.preparaMassa();
        p1.corta();
        p1.mestrando();

        System.out.println("\n\n");

        Operario p2 = new Operario();
        p2.setNome("Matheus");
        p2.setManipularMetal(true);
        p2.setFabricaMetal(true);
        p2.setAjustaMetal(true);
        p2.preparaMassa();
        p2.corta();
        p2.mestrando();

        System.out.println("\n\n");

        Operario p3 = new Operario();
        p3.setNome("Moura");
        p3.setSupervisionar(true);
        p3.setOrienta(true);
        p3.preparaMassa();
        p3.corta();
        p3.mestrando();

        System.out.println("\n\n");

        Operario p4 = new Operario();
        p4.setNome("Barreto");
        p4.setTarefasAuxiliares(true);
        p4.setManipularMetal(true);
        p4.setFabricaMetal(true);
        p4.setAjustaMetal(true);
        p4.setSupervisionar(true);
        p4.setOrienta(true);
        p4.preparaMassa();
        p4.corta();
        p4.mestrando();
    }
}
