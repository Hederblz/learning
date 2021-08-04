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
 * Questão: 2
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

class Museo
{
    constructor(nome, quadro)
    {
        this.nome = nome;
        this.acervo = quadro;
    }
}

function valorAcervo(preco)
{
    valor = q1.preco + q2.preco + q2.preco;
   /* for(var i = 0; i < Quadro.length; i++)
    {
        valor =  valor + Quadro.preco;
    }*/
} 
var valor = 0; 

var q1 = new Quadro('Carlos Cunha', 'Pintura do Campo', 1999, 25, 100, 250);
var q2 = new Quadro('Jose Filho', 'Carros na Estrada', 2003, 100, 125, 510);
var q3 = new Quadro('Carlos Cunha','Igrejas do Centro', 2001, 200, 200, 400);

var m1 = new Museo('Pinacoteca Regional', [q1, q2, q3]);

console.log(m1);
valorAcervo();
console.log('A soma dos valores eh :',valor);