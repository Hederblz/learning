const prompt = require('prompt-sync')();

function transposta()
{
	var linhas = Number(prompt('m1 Digite a quantidade de linhas da matriz: '));
	var colunas = Number(prompt('m1 Digite a quantidade de colunas da matriz: '));

	var matriz1 = [];
	for(var i = 0; i < linhas; i++)
	{
		matriz1[i] = [];
		for(var j = 0; j < colunas; j++)
		{
			matriz1[i][j] = '';
		}
	}

	for (var l = 0; l < linhas; l++)
	{
		for(var c = 0; c < colunas; c++)
		{
			matriz1[l][c] = Number(prompt(`m1 linha ${l} ,coluna ${c} :`));
		}
	}

	var newArray = [];
	for(var i = 0; i < matriz1.length; i++)
	{
		newArray.push([]);
	}

	for(var i = 0; i < matriz1.length; i++)
	{
		for(var j = 0; j < matriz1.length; j++)
		{
			newArray[j].push(matriz1[i][j]);
		}
	}
	var trasp = '';
	for(var l = 0; l < matriz1.length; l++)
	{
		for(var c = 0;c < matriz1.length; c++)
		{
			if(c < matriz1.length - 1)
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

transposta();