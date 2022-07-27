#include <stdio.h>
#include <stdlib.h>
#include <strings.h>
#include <math.h>

int in(unsigned int n);

main(){
       
       unsigned int n;
       printf("digite um numero :");
       scanf("%d" ,&n);
       
       
       printf("O numero eh %d",in(n));

       printf("\n\n\n\n\n\n");
       system("pause");
       }

int in(unsigned int n){
    char con[10], inv[10];
    itoa(n,con,10);
    int i,f;
    f=0;
    for(i= strlen(con)-1; i >=0; i--){
        inv[f] = con[i];
        f++;   
           }
           inv[f] = '\0';
    return atoi(inv);
    
    }
