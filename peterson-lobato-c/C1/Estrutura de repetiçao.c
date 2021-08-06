#include<stdio.h>

main(){
       
       int a;
       
       printf("USANDO O WHILE\n");
       //while(condiçao){}
       a = 1;
       while(a <=10){printf("numero = %d\n",++a);
               }
       printf("USANDO DO-WHILE\n");
       a = 1;
       do{ printf("NUMERO = %d\n",a++);
                      }while(a <=5);
       printf("USANDO O FOR\n");
       //for(inicializaçao,condiçao,incremento){}
       for(a=1;a<=8;a++){
             printf("num eh:%d\n",a);
             }
       
       
       
       
       
       printf("\n\n\n\n");
       system("pause");
       }
