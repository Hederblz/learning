package aula13_threads;

import java.util.Random;

public class Atlets extends Thread{
    private String nome;

    public Atlets(String nome) {
        this.nome = nome;
    }

    public void run() {
        Random aleatorio = new Random();
        double soma = 0;
        double valor = 1 + aleatorio.nextDouble() * 2.5;
        int passada = 0;
        do {
            soma = soma + valor;
            passada++;
        }while (soma<=100);
        System.out.println(nome+" Percurso : "+soma+" Numero de passadas : "+passada);
    }
}
