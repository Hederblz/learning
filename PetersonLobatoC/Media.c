#include<stdio.h>

main(){
       float n1,n2,n3,n4,m;
       printf("digite a 1 nota: ");
       scanf("%f",&n1);
       printf("digite a 2 nota: ");
       scanf("%f",&n2);
       printf("digite a 3 nota: ");
       scanf("%f",&n3);
       printf("digite a 4 nota: ");
       scanf("%f",&n4);
       
       m=(n1+n2+n3+n4)/4;
       printf("a media eh :%.2f\n", m);
       
       
       if(m < 3){printf("aluno REPROVADO!!!!");
            }
       if(m >= 3 && m < 7){printf("PROVA FINAL!!!");
            }
       if(m >= 7){printf("APROVADO!!!");
            }
       
       printf("\n\n\n\n");
       system("pause");
       }
