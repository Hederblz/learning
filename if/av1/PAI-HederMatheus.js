/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Heder Matheus
 * Curso: TSI ou IPI
 * Primeira Avalição Individual
 *
 */


// este exemplo requer a instalação da biblioteca prompt-sync
// comando para instalação: npm install prompt-sync
// mais detalhes em https://www.npmjs.com/package/prompt-sync

const prompt = require('prompt-sync')();
var opcao = - 1;

do
{ // exemplo clássico da utilização do do...while

	imprimirMenu();

	opcao = Number(prompt('Digite uma opção: '));

	
	// adicionem novos cases para novas opções
	switch (opcao)
	{
		case 0:
			break;

		case 1:
			testeDeDivisibilidade();
			break;
		
		case 2:
			fatorial();
			break;

		case 3:
			primo();
			break;
		
		case 4:
			lsdivisor();
			break;

		case 5:
			sobre();
			break;

		default:
			console.log("Digite uma das opções acima");
	}
} while (opcao != 0);

function imprimirMenu()
{
	console.log('\n\n\n');
	console.log('~~ OPERACOES NUMERICAS ~~');
	console.log('Opções:');
	console.log('(1) Teste de Divisibilidade');
	console.log('(2) Fatorial');
	console.log('(3) Primalidade');
	console.log('(4) Lista de divisores');
	console.log('(5) Sobre');
	console.log('(0) Sair');
}

function testeDeDivisibilidade()
{
	console.log('\n\n');
	dividendo = Number(prompt('Digite o numero da ser dividido: '));
	divisor = Number(prompt('Digite o divisor: '));

	if (dividendo % divisor == 0)
	{
		console.log(`${dividendo} eh divisivel por ${divisor}`);
	} else 
	{
		console.log(`${dividendo} nao eh divisivel por ${divisor}`);
	}

}

function fatorial()
{
	console.log("\n\n");
	p1 = Number(prompt("Digite um numero : "));
	if(p1 < 0)
    {
        console.log("Não existe fatoria de numero negativo!");
    }else
	{
		var resultado = p1;
		for(var i = 1; i < p1; i++)
        {
            resultado = resultado * i;
        }
		console.log(`O fatoria de ${p1} eh : ${resultado}`);
	}
}

function primo()
{
	console.log("\n\n");
	console.log("primo");
}

function lsdivisor()
{
	console.log("\n\n");
	console.log("lista de divisores");
}

function sobre()
{
	console.log("\n\n");
	console.log("CEO : Heder Matheus");
	console.log("Aluno do IFPE-Igarassu");
}