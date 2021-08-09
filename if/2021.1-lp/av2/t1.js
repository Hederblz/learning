const prompt = require('prompt-sync')();
var opcao = - 1;

do
{
	var cont = 30;
	imprimirMenu();
	opcao = Number(prompt('Digite uma opção: '));
	for(i = 0; i < cont; i++)
	{
		process.stdout.write("*");
	}

	switch (opcao)
	{
		case 0:
			break;

		case 1:
			matriz1();
			break;
		
		case 2:
			matriz2();
			break;

		case 3:
			determinante2();
			break;

		default:
			console.log("\n\nDIGITE UMA DAS OPCOES ACIMA");
	}
} while (opcao != 0);

function imprimirMenu()
{
	var cont = 30;
	console.log('\n');
	for(i = 0; i < cont; i++)
	{
		process.stdout.write("*");
	}
	console.log('\n~~ OPERACOES NUMERICAS ~~');
	console.log('Opções:');
	console.log('(1) Matriz 1');
	console.log('(2) Matriz 2');
	console.log('(3) Determinante 2 ordem');
}

 function determinante2(linhas, colunas, MATRISZ)
{
	var result = 0;
	if(linhas == 1 && colunas == 1)
	{
		result = MATRISZ[0][0];
		console.log('O determinante eh : '+result);
	}
	if(linhas == 2 && colunas == 2)
	{
		result = MATRISZ[0][0] * MATRISZ[1][1] - MATRISZ[0][1] * MATRISZ[1][0];
		console.log('O determinante eh : '+result);
	}
}

function matriz1()
{
	var linhas = Number(prompt('Digite a quantidade de linhas da matriz: '));
	var colunas = Number(prompt('Digite a quantidade de colunas da matriz: '));

	var MATRISZ = [];
	for(var i = 0; i < linhas; i++)
	{
		MATRISZ[i] = [];
		for(var j = 0; j < colunas; j++)
		{
			MATRISZ[i][j] = '';
		}
	}

	for (var l = 0; l < linhas; l++)
	{
		for(var c = 0; c < colunas; c++)
		{
			MATRISZ[l][c] = Number(prompt(`linha ${l} ,coluna ${c} :`));
		}
	}
	//imprimir matriz 1
	var valores = '';
	for(var l = 0; l < linhas; l++)
	{
		for(var c = 0;c < colunas; c++)
		{
			if(c < colunas - 1)
			{
				valores += MATRISZ[l][c] + '\t\t';
			}else
			{
				valores += MATRISZ[l][c] + '\n';
			}
		}
	}

	console.log('Conteudo da matriz :\n' + valores);
	//determinante2(linhas,colunas,MATRISZ);
	return linhas, colunas, valores, MATRISZ;
}//fim

function matriz2()
{
	var linhas = Number(prompt('Digite a quantidade de linhas da matriz: '));
	var colunas = Number(prompt('Digite a quantidade de colunas da matriz: '));

	var MATRISZ2 = [];
	for(var i = 0; i < linhas; i++)
	{
		MATRISZ2[i] = [];
		for(var j = 0; j < colunas; j++)
		{
			MATRISZ2[i][j] = '';
		}
	}

	for (var l = 0; l < linhas; l++)
	{
		for(var c = 0; c < colunas; c++)
		{
			MATRISZ2[l][c] = Number(prompt(`linha ${l} ,coluna ${c} :`));
		}
	}
	//imprimir matriz 2
	var valores2 = '';
	for(var l = 0; l < linhas; l++)
	{
		for(var c = 0;c < colunas; c++)
		{
			if(c < colunas - 1)
			{
				valores += MATRISZ2[l][c] + '\t\t';
			}else
			{
				valores += MATRISZ2[l][c] + '\n';
			}
		}
	}

	console.log('Conteudo da matriz :\n' + valores2);
}//fim