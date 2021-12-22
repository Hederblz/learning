package aula13_threads;



public class Test {
    public static void main(String[] args) {
            Atlets a1 = new Atlets("heder");
            Atlets a2 = new Atlets("matheus");
            Atlets a3 = new Atlets("moura");
            Atlets a4 = new Atlets("paes");
            Atlets a5 = new Atlets("barreto");
            Thread t1 = new Thread(a1);
            Thread t2 = new Thread(a2);
            Thread t3 = new Thread(a3);
            Thread t4 = new Thread(a4);
            Thread t5 = new Thread(a5);
            t1.start();
            t2.start();
            t3.start();
            t4.start();
            t5.start();
    }
}
