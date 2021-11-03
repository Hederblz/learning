package aula1_basico;

import java.util.Scanner;

public class Divisivel {
    public static void main(String[] args) {
     
        Scanner entrada = new Scanner(System.in);
    
        System.out.println("Verificar se o numero eh divisivel por 3 e 2 ao mesmo tempo");
        System.out.println("Digite o numero: ");
        int numero = entrada.nextInt();
        entrada.close();
        if(numero % 2 == 0 && numero % 3 == 0){
            System.out.println("O numero eh divisivel por 2 e 3 ao mesmo tempo");
        }else{
            System.out.println("Não divisivel por 2 e 3 ao mesmo tempo");
        }
    }
}
