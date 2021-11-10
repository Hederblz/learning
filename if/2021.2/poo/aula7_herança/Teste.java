package aula7_herança;

public class Teste {
    public static void main(String[] args) {
        Responsavel r1 = new Responsavel();
        r1.setNome("edu");
        r1.setCpf(111333);
        r1.setRg(12345678);
        r1.setEndereco("ifpe-igarassu");
        r1.setTelefone(555-5555);
        r1.setEmail("edu@mail.com");

        Aluno a1 = new Aluno();
        a1.setNome("loop");
        a1.setCpf(222222);
        a1.setRg(12322222);
        a1.setEndereco("ifpe-recife");
        a1.setDatadeNascimento("24/05/1999");
        a1.setCurso("IPI");
        a1.setMensalidade(5000);
        a1.setBolsista(true);
        a1.setPorcentagem(50);

        a1.desconto();

    }
}
