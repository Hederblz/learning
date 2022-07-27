const prompt = require('prompt-sync')();

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

	determinante();

	transposta();

function determinante()
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

function transposta()
{
	var newArray = [];
	for(var i = 0; i < MATRISZ.length; i++)
	{
		newArray.push([]);
	}

	for(var i = 0; i < MATRISZ.length; i++)
	{
		for(var j = 0; j < MATRISZ.length; j++)
		{
			newArray[j].push(MATRISZ[i][j]);
		}
	}
	var trasp = '';
	for(var l = 0; l < MATRISZ.length; l++)
	{
		for(var c = 0;c < MATRISZ.length; c++)
		{
			if(c < MATRISZ.length - 1)
			{
				trasp += newArray[l][c] + '\t\t';
			}else
			{
				trasp += newArray[l][c] + '\n';
			}
		}
	}
	console.log('A matris transposta eh : \n');
	console.log(trasp);
}