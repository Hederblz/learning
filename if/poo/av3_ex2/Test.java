package av3_ex2;

public class Test {
    public static void main(String[] args) {
        Veiculo v1 = new Veiculo();
        v1.setNome("hidroavião");
        v1.setVoar(true);
        v1.setNavegar(true);
        v1.corre();
        v1.nada();
        v1.voa();
        System.out.println("\n");

        Veiculo v2 = new Veiculo();
        v2.setNome("urutu");
        v2.setAndanaTerra(true);
        v2.setNavegar(true);
        v2.corre();
        v2.nada();
        v2.voa();
        System.out.println("\n");

        Veiculo v3 = new Veiculo();
        v3.setNome("3 em 1");
        v3.setAndanaTerra(true);
        v3.setVoar(true);
        v3.setNavegar(true);
        v3.corre();
        v3.nada();
        v3.voa();
        System.out.println("\n");
    }
}
