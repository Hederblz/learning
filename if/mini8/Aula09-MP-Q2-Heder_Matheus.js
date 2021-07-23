/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Heder Matheus Moura Paes Barreto
 * Curso: TSI ou IPI
 * Aula: Aula 09 - Arrasy - Mini-prova
 * Questão: 2
 *
 */
var array1 = [[1,2,5,2,2,0], [3,5,-1,0,0,2]]
var array2 = [[3,7,0,1,1,2], [4,4,0,0,0,1]]

console.log("Entrada");
console.log("Array 1 : " + array1);
console.log("Array 2 : " + array2);
console.log();
troca();
function troca()
{
    for(var i = 0; i < array1.length; i++)
    {
        for(var j = 0; j < array1[i].length; j++)
        {
            var ax = [[],[]]
            ax.length = array1.length
            ax[i][j] = array1[i][j]
            array1[i][j] = array2[i][j]
            array2[i][j] = ax[i][j]
        }
    }
    console.log("Saida");
    console.log("Array 1 : " + array1);
    console.log("Array 2 : " + array2);
}