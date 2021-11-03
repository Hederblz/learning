package aula4_praticandopoo;

//Exercício 02

public class Invoice {
    private int numeroItem;
    private String descricao;
    private int quantidade;
    private double preco;

    public Invoice(int numeroItem, String descricao, int quantidade, double preco) {
        this.numeroItem = numeroItem;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.preco = preco;

        if(quantidade < 0){
            this.quantidade = 0;
        }
        if(preco < 0){
            this.preco = 0;
        }
    }

    public int getNumeroItem() {
        return numeroItem;
    }

    public void setNumeroItem(int numeroItem) {
        this.numeroItem = numeroItem;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public double getInvoiceAmount(){
        return quantidade * preco;
    }
}
