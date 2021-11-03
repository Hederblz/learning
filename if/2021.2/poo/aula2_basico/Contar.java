package aula2_basico;

public class Contar {
    public static void main(String[] args) {
        System.out.println("2. Contar de 3 em 3 de 0 até 30\n");
        int contador;
        contador = 0;
        while (contador<=30){
            if(contador%3 == 0) {
                System.out.println(contador);
            }
            contador++;
        }
    }
}
