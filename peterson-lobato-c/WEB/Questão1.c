#include <stdio.h>
#include <stdlib.h>
#include <strings.h>
#include <math.h>

float ra(int n);

main(){ 
       int n;
       float r;
       printf("Digite um numero :");
       scanf("%d", &n);
       
       r = ra(n);
       
       printf("A raiz eh : %.2f", r);
       
       printf("\n\n\n\n\n");
       system("pause");
       }
float ra(int n){
    return sqrt(n);
    }
