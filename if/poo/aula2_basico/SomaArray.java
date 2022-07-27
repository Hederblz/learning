package aula2_basico;

public class SomaArray {
    public static void main(String[] args) {
        System.out.println("1. Implementar programa que soma todos os elementos de um array");

        int a1[] = {1,2,3,4,5};
        int resposta = 0;
        for(int i = 0; i < a1.length;i++){
                 resposta = a1[i] + resposta;
        }
        System.out.println(resposta);
    }
}
