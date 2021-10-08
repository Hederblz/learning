#include <iostream>
#include <math.h>
using namespace std;
int main(){
    setlocale(LC_ALL,"Portuguese");
    float x1,x2,y1,y2,dab,xr,yr,dx,dy,somaxy;
    cout<<"Digite o x1 : ";
    cin>>x1;
    cout<<"Digite o x2 : ";
    cin>>x2;
    cout<<"Digite o y1 : ";
    cin>>y1;
    cout<<"Digite o y2 : ";
    cin>>y2;
    xr = x2 - x1;
    dx = xr*xr;
    yr = y2 - y1;
    dy = yr*yr;
    somaxy = dx + dy;
    dab = sqrt(somaxy);

    cout<<dab;
    
    return 0;
}