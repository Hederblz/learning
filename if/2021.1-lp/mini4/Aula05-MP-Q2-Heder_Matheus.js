/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Heder Matheus Moura Paes Barreto
 * Curso: TSI ou IPI
 * Aula: Aula 05 - Operadores Lógicos - Mini-prova
 * Questão: 2
 *
 */

var a = true
var b = false
var c = false
var d = false


if((a==true&&b!=true&&c!=true&&d!=true)||(a!=true&&b==true&&c!=true&&d!=true)||
    (a!=true&&b!=true&&c==true&&d!=true)||(a!=true&&b!=true&&c!=true&&d==true))
    {   
        console.log('Apenas um é verdadeiro')
}