package aula4_praticandopoo;

public class TesteInvoice {
    public static void main(String[] args) {

        Invoice b1 = new Invoice(1,"Ryzen 5",10,800);

        System.out.println("\n"+ b1.getNumeroItem());
        System.out.println(b1.getDescricao());
        System.out.println(b1.getQuantidade());
        System.out.println(b1.getPreco());
        System.out.println("Fatura : "+ b1.getInvoiceAmount());
    }
}
