package aula3_introducaopoo;

import java.util.Scanner;

public class AddAluno {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        Aluno a1 = new Aluno();

        System.out.println("Nome do aluno : ");
        a1.setNome(entrada.nextLine());
        System.out.println("Curso do aluno : ");
        a1.setCurso(entrada.nextLine());
        System.out.println("Matricula do aluno (so numeros) : ");
        a1.setMatricula(entrada.nextInt());
        entrada.close();

        System.out.println(a1.getNome());
        System.out.println(a1.getCurso());
        System.out.println(a1.getMatricula());
    }
}
