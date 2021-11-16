#include <iostream>
using namespace std;

float triangulo(float lado1, float lado2){
    return (lado1*lado1)+(lado2*lado2);
}

int main(){
 cout<< triangulo(3,3)<<endl;
}