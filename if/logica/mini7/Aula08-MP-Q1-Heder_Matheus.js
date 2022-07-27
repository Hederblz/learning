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
 * Questão: 1
 *
 */
const prompt = require('prompt-sync')();
var soma = 0;

function rep(num)
{
    for(var i = 0; i < vetor.length; i++)
    {
        if(num == vetor[i] )
        {
            soma = soma + 1;
        }
    }
}

var vetor = [1,2,5,2,2,0]
num = Number(prompt("Digite um numero :"));
rep(num);
console.log("O numero de repeticoes eh : " + soma);