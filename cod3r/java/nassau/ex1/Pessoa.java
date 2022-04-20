package nassau.ex1;

public class Pessoa{
  private int ano;
  private int mes;
  private int dia;

  public Pessoa(int ano, int mes, int dia){
    this.ano=ano;
    this.mes=mes;
    this.dia=dia;
  }
  public int dias(){ 
    int result = ((this.ano*365) + (this.mes*30) + this.dia);
    return result;
  }
}