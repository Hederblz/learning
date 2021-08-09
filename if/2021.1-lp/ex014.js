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

determinante(MATRISZ);
var resu;

console.log(resu);

function determinante(MATRISZ) {
    var ordem = MATRISZ.length;

    if (ordem === 1) {
        resu = MATRISZ[0][0];
    }

    if (ordem === 2) {
        resu = MATRISZ[0][0] * MATRISZ[1][1] - MATRISZ[0][1] * MATRISZ[1][0];
    }

    var det = 0;

    for (var j = 0; j < ordem; j++) {
        det += MATRISZ[0][j] * cofator(MATRISZ, 0, j);
    }

    resu =  det;
    console.log(typeof resu);
}

function cofator(MATRISZ, linhas, colunas) {
    var sub_matriz = [],
        ordem = MATRISZ.length,
        m = 0;

    for (var l = 1; l < ordem; l++) {
        sub_matriz[m] = [];

        for (var c = 0; c < ordem; c++) {
            if (j !== colunas) {
                sub_matriz[m].push(MATRISZ[l][c]);
            }
        }
        m++;
    }

    //return Math.pow(-1, linha + coluna) * determinante(sub_matriz);
    return (colunas % 2 ? -1 : 1) * determinante(sub_matriz);
}