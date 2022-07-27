/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Heder Matheus Moura Paes Barreto
 * Curso: TSI ou IPI
 * Aula: Aula 09 - Arrays - Mini-prova
 * Questão: 3
 *
 */

function inicializar(array, n)
{
    for (j = 0; j < array.length; j++)
    {
        for (i = 0; i < array[j].length; i++)
        {
            array[j][i] = n;
        }
    }
}

var array = [[4,5,6,7], [1,2,3,4]]

inicializar(array, 0);
console.log('resultado: ' + array);

/** ERROS NO CODIGO ORIGINAL
 *  
 * 1. for (i = 0; i < a[i].length; i++) -> O i desse for deve ser trocado pelo j.
 * 2. Falta '' no console.log(‘resultado:’) e add a var array.
 * 3. a[i][j] = a -> O primeiro a dever ser a var array e o segundo dever ser a var n.
 * 4. console.log(‘resultado:’, inicializar(array, 0)) -> o inicializar deve ficar fora do console.
 * 5. a[i][j] = a -> O i deve trocar de lugar com o j.
*/