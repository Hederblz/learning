#include<stdio.h>
#include<stdlib.h>


int main(){
       
       int v,r,i,p;
       char V,I,P,R,S,f;
       
       printf("*****************************************\n");
       printf("Calculadora da Lei de Ohm");
       printf("Escolha uma opcao para calculo:\n");
       printf("V - Tensao(Volts)\n");
       printf("I - Corrente(Amper)\n");
       printf("P - Potencia(Watts)\n");
       printf("R - Resistencia(Ohm)\n");
       printf("S - Sair\n");
       printf("*****************************************\n");
       scanf("%s",&f);
       
       switch(f){case 'v' : printf("Digite o valor da resistencia:\n");
                            scanf("%d",&r);
                            printf("Digite o valor da corrente:\n");
                            scanf("%d",&i);
                            v=r*i;
                            printf("O valor da tensao eh : %d\n",v);
                            break;
                            
                  case 'i' : printf("Digite a tensao:\n");
                             scanf("%d",&v);
                             printf("Digite a resistencia:\n");
                             scanf("%d",&r);
                             i=v/i;
                             printf("O valor da corrente eh: %d\n", i);
                             break;
                             
                  case 'p' : printf("Digite a tensao:\n");
                             scanf("%d",&v);
                             printf("Digite a corrente:\n");
                             scanf("%d",&i);
                             p=v*i;
                             printf("O valor da potencia eh: %d\n", p);
                             break;
                             
                  case 'r' : printf("Digite a tensao:\n");
                             scanf("%d",&v);
                             printf("Digite a corrente:\n");
                             scanf("%d",&i);
                             r=v/i;
                             printf("O valor da resistencia eh: %d\n", r);
                             break;
                             
                  case 's' : printf("OBRIGADO POR ULTILIZAR O PROGRAMA");
                             break;
                             
                  defalt : printf("Nao sabemos oque fazer");
                }
                

       printf("\n\n\n\n\n\n");
       system("pause");
       }
