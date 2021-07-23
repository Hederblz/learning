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
 * Questão: 2
 *
 */
var vetora = [1,2,3,4,5,6]
var vetorb = [7,8,9,10,11,12]

console.log("Entrada");
console.log("Vetor 1 : " + vetora);
console.log("Vetor 2 : " + vetorb);
console.log();
troca();
function troca()
{
    if(vetora.length == vetorb.length)
    {
        for(var i = 0; i < vetora.length; i++)
        {
            var vy = [];
            vy.length = vetora.length;
            vy[i] = vetora[i];
            vetora[i] = vetorb[i];
            vetorb[i] = vy[i];
        }
        console.log("Saida");
        console.log("Vetor 1 : " + vetora);
        console.log("Vetor 2 : " + vetorb);
    }else
    {
        console.log("O tamanho dos vetores devem ser igual");
    }
}