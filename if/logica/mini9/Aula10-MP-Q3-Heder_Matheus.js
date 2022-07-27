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
 * Questão: 3
 *
 */

class Televisao 
{
    constructor(modelo, fabricante, tamanho)
    {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.tamanho = tamanho;
    }
}

function maior(tv1, tv2) 
{
    if(tv1.tamanho > tv2.tamanho) 
    {
        return true;
    }else
    {
        return false;
    }
}

var tv1 = new Televisao('V3', 'LG', 200);
var tv2 = new Televisao('T2', 'Samsung', 100);

var m = maior(tv1, tv2);

console.log(m);

/** ERROS NO CODIGO ORIGINAL
 *  
 * 1. construtor esta escrito erra do o certo eh ->constructor
 * 2. (ERRADO) this.tamanho = this.tamanho -> (CERTO) this.tamanho = tamanho
 * 3. (ERRADO) maior(tv1, tv1) -> (CERTO) maior(tv1, tv2)
 * 4. (ERRADO) if (t1.tamanho > t1.tamanho) -> (CERTO) if(tv1.tamanho > tv2.tamanho) 
 * 5. (ERRADO) console.log(false) -> (CERTO) return false.
 * 6. Falta declarar as duas tvs.
 * 7. Falta chamar a funcao.
 * 8. Falta imprimir no console se e true or false.
*/