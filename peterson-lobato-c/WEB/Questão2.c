#include <stdio.h>
#include <stdlib.h>
#include <strings.h>
#include <math.h>

float quadrado(int n);

main(){
       int n;
       float r;
       printf("digite um numero :");
       scanf("%d", &n);
       
       r = quadrado(n);
       
       printf("o quadrado eh :%.2f" ,r);
       
       
       
       printf("\n\n\n\n\n\n");
       system("pause");
       }
float quadrado(int n){
    return pow(n,2);
    }
