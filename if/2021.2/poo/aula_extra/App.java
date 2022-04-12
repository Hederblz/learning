package aula_extra;

import java.util.Scanner;

public class App
{
    public static void main(String[] args)
    {
        Scanner entrada = new Scanner(System.in);
        Usuario u1 = new Usuario();
        Calculadora c1 = new Calculadora(u1);
        int opcao = -1;
        double num1, num2, num3;
        int p;

        do {
            System.out.println("0 - Sair");
            System.out.println("1 - Criar conta");
            System.out.println("2 - Somar");
            System.out.println("3 - Subtração");
            System.out.println("4 - Multiplicação");
            System.out.println("5 - Divisão");
            System.out.println("6 - Função");
            System.out.println("7 - Potenciação");
            System.out.println("Digite um numero : ");
            opcao = entrada.nextInt();

            switch (opcao) {
                case 0:
                    System.out.println("Adeus!");
                    break;
                case 1:
                    System.out.print("Nome : ");
                    u1.setNome(entrada.next());
                    System.out.print("Login : ");
                    c1.setLogin(entrada.next());
                    System.out.print("Senha : ");
                    c1.setSenha(entrada.next());
                    break;
                case 2:
                    System.out.println("Login : ");
                    u1.setLogin(entrada.next());
                    System.out.println("Senha : ");
                    u1.setSenha(entrada.next());
                    if (c1.teste2()==true) {
                        System.out.println("digite o primeiro numero : ");
                        num1 = entrada.nextDouble();
                        System.out.println("digite o segundo numero : ");
                        num2 = entrada.nextDouble();
                        System.out.println(c1.Soma(num1, num2));
                        break;
                    }
                    else {
                        System.out.println("O usuario não tem acesso");
                        break;
                    }
                case 3:
                    System.out.println("Login : ");
                    u1.setLogin(entrada.next());
                    System.out.println("Senha : ");
                    u1.setSenha(entrada.next());
                    if (c1.teste2()==true) {
                        System.out.println("digite o primeiro numero : ");
                        num1 = entrada.nextDouble();
                        System.out.println("digite o segundo numero : ");
                        num2 = entrada.nextDouble();
                        System.out.println(c1.Sub(num1, num2));
                        break;
                    }
                    else {
                        System.out.println("O usuario não tem acesso");
                        break;
                    }

                case 4:
                    System.out.println("Login : ");
                    u1.setLogin(entrada.next());
                    System.out.println("Senha : ");
                    u1.setSenha(entrada.next());
                    if (c1.teste2()==true) {
                        System.out.println("digite o primeiro numero : ");
                        num1 = entrada.nextDouble();
                        System.out.println("digite o segundo numero : ");
                        num2 = entrada.nextDouble();
                        System.out.println(c1.Mult(num1, num2));
                        break;
                    }
                    else {
                        System.out.println("O usuario não tem acesso");
                        break;
                    }
                case 5:
                    System.out.println("Login : ");
                    u1.setLogin(entrada.next());
                    System.out.println("Senha : ");
                    u1.setSenha(entrada.next());
                    if (c1.teste2()==true) {
                        System.out.println("digite o primeiro numero : ");
                        num1 = entrada.nextDouble();
                        System.out.println("digite o segundo numero : ");
                        num2 = entrada.nextDouble();
                        System.out.println(c1.Div(num1, num2));
                        break;
                    }
                    else {
                        System.out.println("O usuario não tem acesso");
                        break;
                    }
                case 6:
                    System.out.println("Login : ");
                    u1.setLogin(entrada.next());
                    System.out.println("Senha : ");
                    u1.setSenha(entrada.next());
                    if (c1.teste2()==true) {
                        System.out.println("digite o primeiro numero : ");
                        num1 = entrada.nextDouble();
                        System.out.println("digite o segundo numero : ");
                        num2 = entrada.nextDouble();
                        System.out.println("digite o terceiro numero : ");
                        num3 = entrada.nextDouble();
                        System.out.println(c1.Funcao(num1,num2,num3));
                        break;
                    }
                    else {
                        System.out.println("O usuario não tem acesso");
                        break;
                    }
                case 7:
                    System.out.println("Login : ");
                    u1.setLogin(entrada.next());
                    System.out.println("Senha : ");
                    u1.setSenha(entrada.next());
                    if (c1.teste2()==true) {
                        System.out.println("digite o primeiro numero : ");
                        num1 = entrada.nextDouble();
                        System.out.println("digite a potencia : ");
                        p = entrada.nextInt();
                        System.out.println(c1.Pot(num1,p));
                        break;
                    }
                    else {
                        System.out.println("O usuario não tem acesso");
                        break;
                    }
            }
        }while (opcao != 0);
    }
}
