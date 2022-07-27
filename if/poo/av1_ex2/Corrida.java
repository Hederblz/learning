package av1_ex2;

public class Corrida {
    public static void main(String[] args) {

        Equipe e1 = new Equipe("Ferrari","GER");
        Carro c1 = new Carro(10,10,10,10,10);
        Piloto p1 = new Piloto("Heder","BR",10,10,10,10,10);
        e1.adicionarPiloto(p1);
        e1.adcionarCarro(c1);

        Equipe e2 = new Equipe("Mercedes","GER");
        Carro c2 = new Carro(5,5,5,5,5);
        Piloto p2 = new Piloto("Barreto","BR",5,5,5,5,5);
        e2.adicionarPiloto(p2);
        e2.adcionarCarro(c2);

        if(e1.obterHabilidade()+e1.obterCaracteristica() > e2.obterHabilidade()+e2.obterCaracteristica()){
            System.out.println("A equipe "+e1.getNome()+" venceu");
        }else if(e1.obterHabilidade()+e1.obterCaracteristica() < e2.obterHabilidade()+e2.obterCaracteristica()){
            System.out.println("A equipe "+e2.getNome()+" venceu");
        }
    }
}
