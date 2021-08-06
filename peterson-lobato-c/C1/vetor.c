#include<stdio.h>

main(){
       
       int n[5],i,m=0,me=1000000,so=0;
       float med;
       
       for(i=0; i < 5; i++){ 
                printf("digite o %d numero: ", i+1);
                scanf("%d",&n[i]);
                if(n[i]>m){
                           m=n[i];
                           }
                if(n[i]<me){
                            me=n[i];
                            }
                so = so+n[i];
                }
                med= so/5;
       for(i=0; i<5; i++){
                printf("o %d numero eh: %d\n",i+1,n[i]);
                }
       for(i=4; i>=0; i--){
                printf("o %d numero invertido eh: %d\n",i+1,n[i]);
                }
       printf("o primeiro numero eh : %d\n", n[0]);
       printf("o ultimo numero eh : %d\n", n[4]);
       printf("o maior num eh: %d\n",m);
       printf("o menor num eh: %d\n",me);
       printf("a soma eh: %d\n",so);
       printf("a media eh: %.2f\n",med);
       
       
       
       
       
       printf("\n\n\n\n");
       system("pause");
       }
