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
 * Questão: 3
 *
 */

var x = 50
var y = 50
var z = 50


if (x == y && y == z && z == x) {
    console.log("São iguais")
}else if(x != y && y != z && z != x){
    console.log("Os três numeros são diferentes")   
}

/** ERROS NO CODIGO ORIGINAL
 *  
 * 1.Na linha 5 esta faltando a variavel y -> y == z
 * 2.O primeiro if verifica se os numeros são iguas
 * 3.O segundo if verifica se os numeros são diferentes
 * 4.Não é necessario o else da linha 9
 * 5.No segundo if (linha 7) o certo é if(x != y && y != z && z != x)
 * 6.No primeiro if(linha 5) deve compara se todas as variaveis são iguais
 *  
*/