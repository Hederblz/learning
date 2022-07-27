package aula2_basico;

import java.util.Arrays;

public class MultArray {
    public static void main(String[] args) {
        System.out.println("2. Implementar um programa que dados um array e um número, multiplica cada elemento do array pelo número recebido como parâmetro");

        int a1[] = {1,2,3,4,5};
        int m = 3;
        for(int i = 0; i < a1.length;i++){
            a1[i] = a1[i] * m;
        }
        System.out.println(Arrays.toString(a1));
    }
}
