package aula5_praticandopoo;

import java.util.Scanner;

public class Calcular {
    public static void main(String[] args) {
        Calculadora c1 = new Calculadora();

        Scanner menu = new Scanner (System.in);
        int op = -1;
		do{
            System.out.print("|------------------------------|\n");
            System.out.print("| Opção 1 - Soma               |\n");
            System.out.print("| Opção 2 - Subtração          |\n");
            System.out.print("| Opção 3 - Multiplicação      |\n");
            System.out.print("| Opção 4 - Divisão            |\n");
            System.out.print("| Opção 5 - Sair               |\n");
            System.out.print("|------------------------------|\n");
            System.out.print("Digite uma opção: ");
            
            int opcao = menu.nextInt();
            op = opcao;
            if(opcao == 1){
                System.out.print("Digite o numero 1 :  ");
                Double x = menu.nextDouble();
                System.out.print("Digite o numero 2 :  ");
                Double y = menu.nextDouble();
                System.out.println(c1.soma(x,y));
            }else if(opcao == 2){
                System.out.print("Digite o numero 1 :  ");
                Double x = menu.nextDouble();
                System.out.print("Digite o numero 2 :  ");
                Double y = menu.nextDouble();
                System.out.println(c1.subtracao(x,y));
            }else if(opcao == 3){
                System.out.print("Digite o numero 1 :  ");
                Double x = menu.nextDouble();
                System.out.print("Digite o numero 2 :  ");
                Double y = menu.nextDouble();
                System.out.println(c1.mult(x,y));
            }else if(opcao == 4){
                System.out.print("Digite o numero 1 :  ");
                Double x = menu.nextDouble();
                System.out.print("Digite o numero 2 :  ");
                Double y = menu.nextDouble();
                System.out.println(c1.divi(x,y));
            }else if(opcao == 5){
                System.out.print("\n tchau!!! \n\n");
            }else{
                System.out.print("\nDigite uma das opções acima\n");
            }
        }while(op != 5);
        menu.close();
    }
}
