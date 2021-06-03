/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: NOME DO ESTUDANTE
 * Curso: TSI ou IPI
 * Aula: Aula 07 - Subprogramas - Mini-prova
 * Questão: 1
 *
 */

function menor(n1, n2, n3, n4)
{
    if(n1<n2 && n1<n3 && n1<n4)
    {
        return(n1);
    }
    if(n2<n1 && n2<n3 && n2<n4)
    {
        return(n2);
    }
    if(n3<n1 && n3<n2 && n3<n4)
    {
        return(n3);
    }
    if(n4<n1 && n4<n2 && n4<n3)
    {
        return(n4);
    }
}

//Digite os numeros
var resultado = menor(-1,2,3,4);

console.log('O menor numero é : '+ resultado);