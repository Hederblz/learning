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
 * Questão: 2
 *
 */
// Digite as linhas e colunas
var linhas = 3;
var colunas = 4;

//Não mexa aqui!!!
var num = 1;

if(linhas <= 0 || colunas <= 0)
{
    console.log('O numero de colunas e de linhas deve ser maior que 0');
} else
{
    for(x=0;x<linhas;x++)
    {
        for(y=0;y<colunas;y++)
        {
            process.stdout.write('\t'+ num);
            num++;
        }
        console.log();
    }
}