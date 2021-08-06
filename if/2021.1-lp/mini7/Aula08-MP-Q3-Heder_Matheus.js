/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Heder Matheus Moura Paes Barreto
 * Curso: TSI ou IPI
 * Aula: Aula 08 - Vetores - Mini-prova
 * Questão: 3
 *
 */

function inicializar(vetor, n)
{
    for (i = 0; i < vetor.length; i++)
    {
        vetor[i] = n;
    }
}

var vetor = [1,2,3,4,5,6]
inicializar(vetor, 0);
console.log('resultado: ' + vetor);

/** ERROS NO CODIGO ORIGINAL
 *  
 * 1. for (i == 0; i < n.lenght; i++) -> O certo é i = 0; e não é lenght e sim length.
 * 2. a[n] === a[n] - n -> O primeiro a dever ser subistituido pela var vetor, o [n] dever ser [i], so um = e o
 * segundo a deve ser substituido pela n.
 * 3. O inicializar(vetor, 0); dever sair de dentro do console.
 * 4. console.log(‘resultado:’) -> O certo é 'resultado' e deve ser acrescentado o vetor.
*/