package av3_ex2;

public class Veiculo implements VeiculoAquatico, VeiculoAereos, VeiculoTerrestre{
    private String nome;
    private boolean andanaTerra;
    private boolean navegar;
    private boolean voar;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public boolean isAndanaTerra() {
        return andanaTerra;
    }

    public void setAndanaTerra(boolean andanaTerra) {
        this.andanaTerra = andanaTerra;
    }

    public boolean isNavegar() {
        return navegar;
    }

    public void setNavegar(boolean navegar) {
        this.navegar = navegar;
    }

    public boolean isVoar() {
        return voar;
    }

    public void setVoar(boolean voar) {
        this.voar = voar;
    }

    public int voa() {
        if(voar==true){
            System.out.println("Voando...");
        }else {
            System.out.println("Não");
        }
        return 0;
    }

    public int nada() {
        if (navegar==true){
            System.out.println("Velejando...");
        }else {
            System.out.println("Não");
        }
        return 0;
    }

    public int corre() {
        if (andanaTerra==true){
            System.out.println("Correndo");
        }else {
            System.out.println("Não");
        }
        return 0;
    }
}
