package nassau.ex3;

public class Saldo{

	private int saldo;


	public Saldo(int saldo){
		this.saldo = saldo;
	}
	
	public int imprimir(){
		int resultado;
		int v1 = this.saldo/100;
		resultado = v1 + this.saldo;
		return resultado;
	}
}
