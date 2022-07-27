package av1_ex1;

public class TesteEx1 {
    public static void main(String[] args) {

        Militar m1 = new Militar();
        m1.setName("Heder");
        m1.setNomeDeGuerra("Barreto");
        m1.setPatente("Almirante");
        m1.setPertence("Marinha");
        Arma a1 = new Arma("abc","metralhadora",15,20);
        Arma a2 = new Arma("abc","fuzil",15,20);
        a1.setMilitar(m1);
        m1.adcionarArma(a1);
        a2.setMilitar(m1);
        m1.adcionarArma(a2);

        for(int i = 0; i < m1.quantidadedeArmas(); i++) {
            System.out.println(m1.getArma(i).getTipo());
        }
    }
}
