package aula6_herança;

public class Teste {
    public static void main(String[] args) {
        VeiculodeCarga caminhao = new VeiculodeCarga();
        VeiculodePasseio van = new VeiculodePasseio();

        caminhao.setFabricante("Volkswagen");
        caminhao.setModelo("Volkswagen e-Delivery");
        caminhao.setPlaca("BRA2E19");
        caminhao.setAno(2021);
        caminhao.setChassis("LJCPCBLCX11000237");
        caminhao.setCapacidadedeCarga(9055);

        van.setFabricante("Mercedes Benz");
        van.setModelo("Sprinter");
        van.setPlaca("BRA2E21");
        van.setAno(2021);
        van.setChassis("LJCPCBLCX11000222");
        van.setarCondicionado(true);
        van.setPorta(3);

        System.out.println("nome do fabricante - "+van.getFabricante());
        System.out.println("nome do modelo - "+van.getModelo());
        System.out.println("placa - "+van.getPlaca());
        System.out.println("ano da veiculo - "+van.getAno());
        System.out.println("chassi do veiculo - "+van.getChassis());
        System.out.println("tem ar-condicionado ? "+van.isarCondicionado());
        System.out.println("Quantas portas ? "+van.getPorta());

        
        System.out.println("\nnome do fabricante - "+caminhao.getFabricante());
        System.out.println("nome do modelo - "+caminhao.getModelo());
        System.out.println("placa - "+caminhao.getPlaca());
        System.out.println("ano da veiculo - "+caminhao.getAno());
        System.out.println("chassi do veiculo - "+caminhao.getChassis());
        System.out.println("Qual a carga ? "+caminhao.getCapacidadedeCarga()+"kg");
    }
}
