/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Heder Matheus Moura Paes Barreto
 * Curso: TSI ou IPI
 * Aula: Aula 07 - Subprogramas - Mini-prova
 * Questão: 3
 *
 */

function mediaGeometrica(a,b,c)
{
    //variavel para fazer a raiz cubica dos valores
    var r;
    r = Math.cbrt(a*b*c);
    return r;
}
//digite os valores
console.log("O resultado é :" + mediaGeometrica(1,2,3));

/** ERROS NO CODIGO ORIGINAL
 *  
 * 1.O nome da função esta difernte na linha 1 e dentro do console na linha 5.
 * 2.Não se usa x para fazer multiplicação o certo é *.
 * 3.No arquivo do modelo dentro do console na linha 5 esta `resultado´ e 
 *  no arquivo da aula 7 esta "resultado" bem o certo é com "".
 * 4.Não deve ter o let na linha 1.
 * 5.O certo é return.
*/