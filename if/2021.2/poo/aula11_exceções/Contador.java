package aula11_exceções;

import java.util.Scanner;

public class Contador {
    public static void main(String[] args) {
        double x = 0, soma = 0 , numero,cont = 0,media;
        Scanner entrada = new Scanner(System.in);
        do {
            try {
                System.out.println("Digite o numero: ");
                numero = entrada.nextDouble();

                soma = soma + numero;
                x = soma;
                System.out.println("Valor acumulado : " + soma);

                System.out.println("Numero : " + numero);
                cont++;

                System.out.println("Quantos numeros somados ? -> " + cont);

                media = soma / cont;
                System.out.println("Media -> " + media);

                if(soma > 100){
                    throw new Exception("NUMERO MAIOR QUE CEM");
                }
            }
            catch (ArrayIndexOutOfBoundsException e){
                System.out.println("ERRO!!!");

            } catch (Exception e) {
                e.printStackTrace();
            }

        }while (x<100);
        entrada.close();
    }
}
