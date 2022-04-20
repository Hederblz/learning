package nassau.ex6;

public class Numero{
	private int num;



	public int getNum(){
		return num;
	}

	public void setNum(int num){
		this.num = num;
	}

	public int prox(){
		int prox;
		prox = this.num + 1;
		return prox;
	}

	public int ant(){
		int ant;
		ant = this.num - 1;
		return ant;
	}
}