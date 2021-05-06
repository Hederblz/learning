/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Heder Matheus Moura Paes Barreto
 * Curso: TSI ou IPI
 * Aula: Aula 03 - Variáveis, Tipos e Operadores - Mini-prova
 * Questão: 1
 *
 */


//numcasos = (1+0.5)^x

//Simulando uma taxa de infecção de 50% 
taxa = 0.5
y = 1+taxa
//n -> numero de semanas  x -> numero de dias
n = 3
x = (7*n)
numcasos = Math.pow(y,x)

console.log('o novo numero de casos é', numcasos)