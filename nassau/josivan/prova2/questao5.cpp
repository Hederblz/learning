//Faça um programa em C++ que recebe um valor inteiro e 
//verifica se o valor é positivo ou
//negativo. Para isso use função, a mesma deve retornar um valor booleano.

#include <stdio.h>
#include <iostream>
using namespace std;

bool verifica(int num){
    bool status;
    if(num >= 0){
        status = true;
    }if(num < 0){
        status = false; 
    }
    return status;
}

int main(){
    int x;
    cout<<"DIGITE UM NUMERO : ";
    cin>>x;
    verifica(x);
    
    cout<<"\n\n";
    return 0;
}
