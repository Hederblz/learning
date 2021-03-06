package oo.composicao.a2;

import java.util.ArrayList;
import java.util.Arrays;

public class Compra {

    String cliente;
    ArrayList<Item> itens = new ArrayList<Item>();

    double obterValorTotal(){
        double total = 0;

        for(Item item: itens){
            total += item.quantidade * item.preco;
        }

        return total;
    }
}
