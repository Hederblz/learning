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
 * Questão: 1
 *
 */


//numcasos = (1+0.5)^x

//Simulando uma taxa de infecção de 50% 
taxa = 0.5
y = 1+taxa
//x -> numero de semanas  d -> numero de dias
x = 3

if(x != 0 && x > 0){
    d = (7*x)
    numcasos = Math.pow(y,d)

    console.log('o numero de casos é', numcasos)
}
else {
    console.log('o numero de semanas deve ser maior que 0')
}