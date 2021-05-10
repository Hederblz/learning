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
 * Questão: 3
 *
 */

var n = -0

if(n == 0){
    console.log("o numero é neutro")
}else if (n >= 0){
        if (n % 2 == 0){
            console.log("o numero é positivo e par")
            } 
        else {
            console.log("o numero é positivo e impar")
        }
    } 
else if(n % 2 != 0){
    console.log("o numero é negativo e impar")
}
else{
    console.log("o numero é negativo e par")
}