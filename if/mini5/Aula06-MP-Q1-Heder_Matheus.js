/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: NOME DO ESTUDANTE
 * Curso: TSI ou IPI
 * Aula: Aula 06 - Laços - Mini-prova
 * Questão: 1
 *
 */
// Digite os numeros!!
var num1 = 10;
var num2 = 10;

if(num1<num2)
{
    var contador1 = num1 + 1;
        while(contador1 < num2)
        {
            if(contador1 % 2 == 0)
            {
                console.log(contador1);
            }
        contador1++;
        }
    }else if(num2<num1)
    {
        var contador2 = num1 - 1;
            while(contador2 > num2)
            {
                if(contador2 % 2 == 0)
                {
                    console.log(contador2);
                }
            contador2--;
        }
    } else if (num1 == num2)
    {
        console.log("Os numeros devem ser diferentes");
    }