package aula9_interfaces;

public class Teste {
    public static void main(String[] args) {
        Atleta a1 = new Atleta();
        a1.surfando();
        a1.escalar();

        Atleta a2 = new Atleta();
        a2.quebraRaquete();
        a2.surfando();
    }
}
