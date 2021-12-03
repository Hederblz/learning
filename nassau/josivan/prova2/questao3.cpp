#include <iostream>
using namespace std;
int main(){
    int i,n,f = 1;
    cout<<"Entre com um valor inteiro positivo: ";
    cin>>n;
    for(i=1;i<=n;i++){
        f=f*i;
    }
    cout<<f;

    cout<<"\n\n";
    return 0;
}