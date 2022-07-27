package av2_ex1;

public class Desenhar {
    public static void main(String[] args) {
        Fig3D f2 = new Fig3D();
        f2.setX(12);
        f2.setY(15);
        f2.setZ(5);
        f2.mover(20,10,5);
        System.out.println(f2.getX());
        System.out.println(f2.getY());
        System.out.println(f2.getZ());
        System.out.println(f2.volumeFig());
        Fig2D f1 = new Fig2D();
        f1.setX(10);
        f1.setY(30);
        f1.mover(20,20);
        System.out.println(f1.getX());
        System.out.println(f1.getY());
        System.out.println(f1.areaFig());
    }
}
