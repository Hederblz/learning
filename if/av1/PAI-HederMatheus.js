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

// para adicionar mais opções ao menu altere esta função
function imprimirMenu() {
	console.log('~~ OPERACOES NUMERICAS ~~')
	console.log('Opções:')
	console.log('(1) Teste de Divisibilidade')
	console.log('(2) Sair')
}


// note como esta operação está isolada em uma função
// as novas que vocês vão implementar na prova devem seguir o mesmo modelo
function testeDeDivisibilidade() {
	dividendo = Number(prompt('Digite o numero da ser dividido: '))	
	divisor = Number(prompt('Digite o divisor: '))


	if (dividendo % divisor == 0) {
		console.log(`${dividendo} eh divisivel por ${divisor}`)
	} else {
		console.log(`${dividendo} nao eh divisivel por ${divisor}`)
	}

}

 
var opcao = - 1

do { // exemplo clássico da utilização do do...while

	imprimirMenu()

	opcao = Number(prompt('Digite uma opção: '))

	// adicionem novos cases para novas opções
	switch (opcao) {
		case 1:
			testeDeDivisibilidade()
			break
	}

} while (opcao != 2)