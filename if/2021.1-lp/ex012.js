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
			MATRISZ[l][c] = prompt(`linha ${l} ,coluna ${c} :`);
		}
	}

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
				valores += MATRISZ[l][c] + '\t\t';
			}
		}
	}

	console.log('Conteudo da matriz :\n' + valores);