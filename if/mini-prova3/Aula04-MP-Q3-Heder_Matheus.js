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

var n = 7
// se o numero for 0 ele não é positivo ou negativo
if(n == 0){
    console.log("o numero é neutro")
}
// se o numero for != de 0, aqui será verificado se ele é positivo ou negativo
    else if (n >= 0){
// se ele for positivo, aqui será verificado se ele é par ou impar
        if (n % 2 == 0){
            console.log("o numero é positivo e par")
            } 
        else {
            console.log("o numero é positivo e impar")
        }
    } 
else if(n % 2 != 0){
// se ele for negativo, aqui será verificado se ele é par ou impar
    console.log("o numero é negativo e impar")
}
else{
    console.log("o numero é negativo e par")
}
/*ERROS NO CODIGO ORIGINAL
    1. n == 7; == é um operador de comparação o certo é usar so 1 =
    2. é necessario verificar se o numero digitado é ou não 0, pq 0 não é par nem impar e sim neutro
    3. as condições do if tem que estar entre parênteses -> if (n % 2 >= 0)
    4. para verificar se o numero é par o resto da divisão do numero por 2 deve ser igua a 0 -> if(n % 1 == 0)
    5. não é para somar n + 1 -> if(n + 1)
    6. no console.log deve ficar claro se o numero é negativo ou positivo , par ou impar
    7. o codigo deve verificar se o numero negativo é par ou impar
*/