#include <stdio.h>
#include <stdlib.h>
#include <strings.h>

main(){
       
       char txt[100], inv[100];
       int i,f;
       
       printf("digite um txt :");
       gets(txt);
       printf("o tamanho eh : %d \n" ,strlen(txt));
       f=0;
       for(i=strlen(txt)-1; i >= 0; i--){
                            inv[f]= txt[i];
                            f++;
                            }
       inv[f]= '\0';
       printf("o inverso eh : %s \n" ,inv);
       
       if(strcmp(txt,inv)==0){
                              printf("eh palidromo");
            }
       else{
            printf("nao eh palindromo");
            }
       
       
       
       
       
       printf("\n\n\n\n");
       system("pause");
       }
