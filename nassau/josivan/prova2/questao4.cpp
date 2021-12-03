/*Desenvolva um programa em C++ que calcule os 20 primeiros 
números da sequência de Fibonacci e armazene em um vetor. 
Sabendo que é uma sequência  de números inteiros, começando por 0 e 1, 
na qual, cada termo subsequente corresponde à soma dos dois anteriores.*/

#include <iostream>
using namespace std;
int main(){
    int num1, num2, n, num3;
    int vetor[20];
    n = 20;
    num1 = 0;
    num2 = 1;
    vetor[0] = num1;
    vetor[1] = num2;
    for(int i = 2; i <= n; i++){
        vetor[i] = num1+num2;
        num1 = num2;
        num2 = vetor[i];
    }
    for(int i = 0; i <= n; i++){
        cout<<vetor[i]; 
        cout<<"\t";
    }
    cout<<"\n\n";
    return 0;
}
