#include <iostream>

using namespace std;

int main(int argc, char** argv) {
	float acelera, velocidade, po, tempo, distancia;
	cout<<"Digite a posicao inicial em metros : ";
	cin>>po;
	cout<<"Digite a velocidade inicial em m/s: ";
	cin>>velocidade;
	cout<<"Digite a aceleracao em m/s^2: ";
	cin>>acelera;
	cout<<"Digite o tempo em segundos : ";
	cin>>tempo;
	distancia = (po + (velocidade * tempo) + ((acelera*tempo*tempo)/2));
	cout<<"a distancia percorrida eh: "<<distancia;
	return 0;
}
