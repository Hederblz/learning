package aula7_herança;

public class Aluno extends Pessoa{

    private String datadeNascimento;
    private String curso;
    private double mensalidade;
    private boolean bolsista;
    private double porcentagem;


    public double desconto(){
        double mensal;
        double porcent;
        double descontoFinal;
        if(bolsista == true){
            mensal = getMensalidade();
            porcent = getPorcentagem();
            descontoFinal = mensal - (mensal * porcent/100);
            System.out.println("A mensalidade é de : "+descontoFinal);
        }else {
            System.out.println("Sem desconto");
        }
        return 0;
    }

    public String getDatadeNascimento() {
        return datadeNascimento;
    }

    public void setDatadeNascimento(String datadeNascimento) {
        this.datadeNascimento = datadeNascimento;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    public double getMensalidade() {
        return mensalidade;
    }

    public void setMensalidade(double mensalidade) {
        this.mensalidade = mensalidade;
    }

    public boolean isBolsista() {
        return bolsista;
    }

    public void setBolsista(boolean bolsista) {
        this.bolsista = bolsista;
    }

    public double getPorcentagem() {
        return porcentagem;
    }

    public void setPorcentagem(double porcentagem) {
        this.porcentagem = porcentagem;
    }
}
