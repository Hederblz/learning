package av1_ex2;

import java.util.ArrayList;
import java.util.List;

public class Equipe {

    private List<Piloto> pilotos = new ArrayList<>();
    private List<Carro> carros = new ArrayList<>();

    private String nome;
    private String nacionalidade;

    Equipe(String nome, String nacionalidade){
        this.nome = nome;
        this.nacionalidade = nacionalidade;
    }

    public String getNome() {
        return nome;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void adicionarPiloto(Piloto piloto){
        this.pilotos.add(piloto);
    }

    public void adcionarCarro(Carro carro){
        this.carros.add(carro);
    }

    public int obterHabilidade(){
        int habi = 0;
        for(Piloto piloto: pilotos){
         habi =  piloto.getExperiencia()+piloto.getFisico()+piloto.getDestrezaLargada()+piloto.getDestrezaUltra()+piloto.getPericia();
        }
        return habi;
    }

    public int obterCaracteristica(){
        int caract = 0;
        for(Carro carro: carros){
            caract = carro.getAerodinamica()+carro.getEstabilidade()+carro.getPotencia()+carro.getTorque()+carro.getVelocidadeFinal();
        }
        return caract;
    }

}
