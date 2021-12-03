#include <iostream>
#include <stdio.h>
using namespace std;
int main(){
    int x,y;
    y = 0;
    cout<<"Digite um numero : ";
    cin>>x;
    for (int i = 1; i <= x; i++){
        y = y + i;
    }
    cout<<"Resultado : "<<y;
    cout<<"\n\n";
    return 0;
}