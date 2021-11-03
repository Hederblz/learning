package oo.composicao.a3;

public class Sistema {
    public static void main(String[] args) {


        Compra compra1 = new Compra();
        compra1.adicionarItem("Caneta",1,100);
        compra1.adicionarItem(new Produto("Notebook",2000.0),2);

        Compra compra2 = new Compra();
        compra2.adicionarItem("Caderno",10,10);
        compra2.adicionarItem(new Produto("Impressora",1000.0),1);

        Cliente cliente = new Cliente("Maria");
        cliente.adicionarCompra(compra1);
        cliente.compras.add(compra2);

        System.out.println(compra1.obterValorTotal());
        System.out.println(compra2.obterValorTotal());
    }
}
