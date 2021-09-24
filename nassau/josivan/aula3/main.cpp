#include <iostream>
using namespace std;
int main(){
    setlocale(LC_ALL,"Portuguese");
    float Nota1,Nota2,Media;
    cout<<"Digite a primeira nota :";
    cin>>Nota1;
    cout<<"Digite a segunda nota :";
    cin>>Nota2;
    Media = (Nota1+Nota2)/2;
    cout<<"O valor da media eh : "<<Media<<endl;
    if(Media>=7 && Media<=10){
        cout<<"O aluno foi aprovado";
    }
    else{
        cout<<"O aluno vai pra final";
    }
    return 0;
}