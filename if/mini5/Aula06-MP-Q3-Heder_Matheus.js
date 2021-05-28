/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: NOME DO ESTUDANTE
 * Curso: TSI ou IPI
 * Aula: Aula 06 - Laços - Mini-prova
 * Questão: 3
 *
 */
// Digite as linhas e colunas

//Digites os valores:
var a = 10;
var b = 2;

//Não mexa aqui!!!
var r = 0;

if(b>0){
    for (i = 0; i < b; i++) {
        r = r + a;
    }
} else if(b<0){
    for(i=0;i>b;i--){
    r = r - a;
    }
}


console.log('O resultado é :', r);

/** ERROS NO CODIGO ORIGINAL
 *  
 * 1.No for o valor do i deverser 0.
 * 2.A condição do i deve ser i < b (caso o b seja positivo) ou i > b (caso o b seja negativo).
 * 3.A formula para fazer a multiplicação deve ser r = r + a(Para o b>0) e r = r - a(Para o b<0).
 * 4.Como a ordem dos fatores não altera o produto devera ser acrescentado dois if e um else para
 * caso o valor do b seja positivo ou negativo.
 * 5.Na linha 9 do codigo original o certo é usar '' dentro do console.log.
 * 
 * Notas
 * 
 * 1.O ponto e virgula é opcional, eu so coloque pq acho que fica mais bonito.
 * 2.Não mexa na linha 21.
*/