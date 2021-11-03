package aula1_basico;

import java.util.Scanner;

public class ParImpar {
    public static void main(String[] args) {
    
    Scanner entrada = new Scanner(System.in);
    
    System.out.println("Verificar se o numero eh Par ou Impar");
    System.out.println("Digite o numero: ");
    int numero = entrada.nextInt();
    entrada.close();
    
        if(numero % 2 == 1){
            System.out.println("O numero eh impar");
        }else{
            System.out.println("O numero eh par");
        }
    }
    
}
