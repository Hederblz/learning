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
 * Questão: 2
 *
 */

function fatorial(n)
{
    if(n < 0)
    {
        console.log("Não existe fatoria de numero negativo!");
    }else
    {
        var r = n;
        for(var i = 1; i < n; i++)
        {
            r = r * i;
        }
        return r;
    }
}
//Digite o numero
console.log(fatorial(5));