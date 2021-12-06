package av3_ex1;

public class Operario implements Servente, Serralheiro, MestredeObras{
    private String nome;
    private boolean tarefasAuxiliares;
    private boolean manipularMetal;
    private boolean fabricaMetal;
    private boolean ajustaMetal;
    private boolean supervisionar;
    private boolean orienta;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public boolean isTarefasAuxiliares() {
        return tarefasAuxiliares;
    }

    public void setTarefasAuxiliares(boolean tarefasAuxiliares) {
        this.tarefasAuxiliares = tarefasAuxiliares;
    }

    public boolean isManipularMetal() {
        return manipularMetal;
    }

    public void setManipularMetal(boolean manipularMetal) {
        this.manipularMetal = manipularMetal;
    }

    public boolean isFabricaMetal() {
        return fabricaMetal;
    }

    public void setFabricaMetal(boolean fabricaMetal) {
        this.fabricaMetal = fabricaMetal;
    }

    public boolean isAjustaMetal() {
        return ajustaMetal;
    }

    public void setAjustaMetal(boolean ajustaMetal) {
        this.ajustaMetal = ajustaMetal;
    }

    public boolean isSupervisionar() {
        return supervisionar;
    }

    public void setSupervisionar(boolean supervisionar) {
        this.supervisionar = supervisionar;
    }

    public boolean isOrienta() {
        return orienta;
    }

    public void setOrienta(boolean orienta) {
        this.orienta = orienta;
    }

    public int mestrando() {
        if (supervisionar==true && orienta==true){
            System.out.println("Mestrando...");
        }else{
            System.out.println("Não");
        }
        return 0;
    }

    public int corta() {
        if (manipularMetal==true && fabricaMetal==true && ajustaMetal==true){
            System.out.println("Metal!!!");
        }else{
            System.out.println("Não");
        }
        return 0;
    }

    public int preparaMassa() {
        if(tarefasAuxiliares == true){
            System.out.println("Preparando a massa...");
        }else{
            System.out.println("Não");
        }
        return 0;
    }
}
