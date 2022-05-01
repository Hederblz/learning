package nassau.ex6;

import java.util.Scanner;

public class Main{
	public static void main(String[] args){
		Scanner entrada = new Scanner(System.in);
		Numero n = new Numero();

		System.out.println("Digite um numero :");
		n.setNum(entrada.nextInt());

		System.out.println("proximo :"+n.prox());

		System.out.println("anterior :"+n.ant());

	}
}