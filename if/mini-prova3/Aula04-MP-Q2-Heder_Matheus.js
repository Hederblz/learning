/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Heder Matheus Moura Paes Barreto
 * Curso: TSI ou IPI
 * Aula: Aula 04 - Execução Condicional - Mini-prova
 * Questão: 2
 *
 */

var a = 6
var b = 6
var c = 1

if (a != b && b != c && c != a ){
    console.log('os três numeros são diferentes')
}else if(a != b && a != c || b != a && b != c || c != a && c != b){
    console.log('um numero é diferente')
}