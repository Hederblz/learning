#include <stdio.h>
#include <iostream>
using namespace std;
int main(){
    float n1,n2,m;
    cin>>n1;
    cin>>n2;
    m=(n1+n2)/2;
    if(m>=10 && m<=20)
    cout << n1/4;
    else
    cout << n2*10;
}