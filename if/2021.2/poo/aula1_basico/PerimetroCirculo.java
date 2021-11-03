package aula1_basico;

import java.util.Scanner;

public class PerimetroCirculo {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("Calculo do perimetro do circulo");
        System.out.println("Digite o numero do raio : ");
        double raio = entrada.nextDouble();
        entrada.close();
        double pi = 3.14;
        double perimetro = 2*pi*raio;
        System.out.printf("O valor do perimetro eh " + perimetro);
    }
}
