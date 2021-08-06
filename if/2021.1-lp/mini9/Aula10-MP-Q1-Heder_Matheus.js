/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Heder Matheus Moura Paes Barreto
 * Curso: TSI ou IPI
 * Aula: Aula 10 - Registros - Mini-prova
 * Questão: 1
 *
 */

class Quadro
{
    constructor(autor, titulo, ano, largura, altura, preco)
    {
        this.autor = autor;
        this.titulo = titulo;
        this.ano = ano;
        this.largura = largura;
        this.altura = altura;
        this.preco = preco;
    }
}

function mesmoAutor(q1, q2)
{
    if(q1.autor == q2.autor)
    {
        return true;
    }else
    {
        return false;
    }
}

var q1 = new Quadro('Carlos Cunha', 'Pintura do Campo', 1999, 25, 100, 250);
var q2 = new Quadro('Jose Filho', 'Carros na Estrada', 2003, 100, 125, 510);

console.log(q1);
console.log(q2);

var iguais = mesmoAutor(q1, q2);

console.log('Os quadros são iguas ?\n', iguais);