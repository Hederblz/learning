#include <iostream>
#include <math.h>
using namespace std;
int main(){
    setlocale(LC_ALL,"Portuguese");
    
    //entrada
    float mes1,mes2,ano1,ano2;
    cout<<"Digite o mes 1 : ";
    cin>>mes1;
    cout<<"Digite o ano 1 : ";
    cin>>ano1;
    cout<<"Digite o mes 2 : ";
    cin>>mes2;
    cout<<"Digite o ano 2 : ";
    cin>>ano2;
 
    //logica
    float rmes,rano,rfinal;
    
    rmes = mes2 - mes1; 
    rano = ano2 - ano1;
    rfinal =(rano*12)+ rmes;

    //saida
    cout<<"A distancia eh : "<<rfinal;
    
    return 0;
}