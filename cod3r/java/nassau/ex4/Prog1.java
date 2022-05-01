package nassau.ex4;

public class Prog1{
	private int ipi;
	private int cod_p1;
	private int val_p1;
	private int qua_p1;
	private int cod_p2;
	private int val_p2;
	private int qua_p2;


	public Prog1(int ipi, int cod_p1, int val_p1, int qua_p1, int cod_p2, int val_p2, int qua_p2){
		this.ipi = ipi;
		this.cod_p1 = cod_p1;
		this.val_p1 = val_p1;
		this.qua_p1 = qua_p1;
		this.cod_p2 = cod_p2;
		this.val_p2 = val_p2;
		this.qua_p2 = qua_p2;
	}

	public int formula(){
		int resultado;
		resultado=((this.val_p1*this.qua_p1 + this.val_p2*this.qua_p2)*((this.ipi/100)+1));
			return resultado;
	}

}