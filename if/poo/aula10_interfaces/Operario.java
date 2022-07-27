package aula10_interfaces;

public class Operario implements Mecanico, TecPintura, Supervisor{
    private String nome;
    private boolean manusearFerramentas;
    private boolean manipularTinta;
    private boolean auxiliarMontagem;

    public boolean isManusearFerramentas() {
        return manusearFerramentas;
    }

    public void setManusearFerramentas(boolean manusearFerramentas) {
        this.manusearFerramentas = manusearFerramentas;
    }

    public boolean isManipularTinta() {
        return manipularTinta;
    }

    public void setManipularTinta(boolean manipularTinta) {
        this.manipularTinta = manipularTinta;
    }

    public boolean isAuxiliarMontagem() {
        return auxiliarMontagem;
    }

    public void setAuxiliarMontagem(boolean auxiliarMontagem) {
        this.auxiliarMontagem = auxiliarMontagem;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int conserta() {
        if (manusearFerramentas == true){
            System.out.println("Manuseando ferramentas");
        }else{
            System.out.println("não");
        }
        return 0;
    }

    public int supervisiona() {
        if (auxiliarMontagem == true){
            System.out.println("Supervisionando");
        }else{
            System.out.println("não");
        }
        return 0;
    }

    public int pintarCarro() {
        if (manipularTinta == true){
            System.out.println("Pintando o carro");
        }else{
            System.out.println("não");
        }
        return 0;
    }
}
