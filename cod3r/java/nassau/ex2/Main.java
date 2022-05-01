package nassau.ex2;

public class Main{
  private static Calculadora calc1;
  private static Calculadora calc2;
  public static void main(String[] args){
    double media1;
    double media2;
    double soma;

    calc1 = new Calculadora(8,9,7);
    calc2 = new Calculadora(4,5,6);

    media1 = calc1.media();
    media2 = calc2.media();

    soma = calc1.soma(media1, media2);

    System.out.println("media eh :"+soma);
    
  }
}