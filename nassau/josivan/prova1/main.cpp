// Escrever um programa em C++ que leia três valores inteiros distintos e os escreva em ordem decrescente.

#include <iostream>
using namespace std;
int main(){
    setlocale(LC_ALL,"Portuguese");
    int valor0,valor1,valor2;
    cout<<"Digite o valor 1 : ";
    cin>>valor0;
    cout<<"Digite o valor 2 : ";
    cin>>valor1;
    cout<<"Digite o valor 3 : ";
    cin>>valor2;
    if(valor0 > valor1 && valor0 > valor2 && valor1 > valor2){
        cout<<"valor 1 : "<<valor0<<"\n";
        cout<<"valor 2 : "<<valor1<<"\n"; 
        cout<<"valor 3 : "<<valor2<<"\n";
    }else if(valor0 > valor1 && valor0 > valor2 && valor2 > valor1){
        cout<<"valor 1 : "<<valor0<<"\n"; 
        cout<<"valor 3 : "<<valor2<<"\n"; 
        cout<<"valor 2 : "<<valor1<<"\n";
    }else if(valor1 > valor0 && valor1 > valor2 && valor0 > valor2){
        cout<<"valor 2 : "<<valor1<<"\n"; 
        cout<<"valor 1 : "<<valor0<<"\n"; 
        cout<<"valor 3 : "<<valor2<<"\n";
    }else if(valor1 > valor0 && valor1 > valor2 && valor2 > valor0){
        cout<<"valor 2 : "<<valor1<<"\n"; 
        cout<<"valor 3 : "<<valor2<<"\n"; 
        cout<<"valor 1 : "<<valor0<<"\n";
    }else if(valor2 > valor0 && valor2 > valor1 && valor0 > valor1){
        cout<<"valor 3 : "<<valor2<<"\n"; 
        cout<<"valor 1 : "<<valor0<<"\n"; 
        cout<<"valor 2 : "<<valor1<<"\n";
    }else if(valor2 > valor0 && valor2 > valor1 && valor1 > valor0){
        cout<<"valor 3 : "<<valor2<<"\n"; 
        cout<<"valor 2 : "<<valor1<<"\n"; 
        cout<<"valor 1 : "<<valor0<<"\n";
    }
    return 0;
}