package aula2_basico;

public class Imprimir {
    public static void main(String[] args) {
        int contador,g,contador2;
        contador = 0;
        contador2 = 0;
        g = 0;

        System.out.println("6. Imprimir os 10 primeiros números divisíveis por 10");
        while(contador2 != -2){
            if (contador%10 == 0 && contador != 0){
                System.out.println(contador);
                g++;
            }else if(g==10){
                contador2 = -2;
            }
            contador++;
        }
    }
}
