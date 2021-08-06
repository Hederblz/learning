#include <stdio.h>
#include <stdlib.h>

main(){
       
       float n[3][4];
       int linha,coluna;
       
       for (linha=0; linha<3; linha++){
           for(coluna=0; coluna<4; coluna++){
                         printf("DIGITE A %d NOTA DO ALUNO %d : ",coluna+1,linha+1);
                         scanf("%f",&n[linha][coluna]);
                         }
           }
       
       
       
       
       
       
       
       
       
       printf("\n\n\n\n\n");
       system("pause");
       }
