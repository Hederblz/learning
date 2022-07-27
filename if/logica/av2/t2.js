var matriz1 = [[1,1,1,1,1],[1,1,1,1,1]];
var matriz2 = [[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]];

console.log("Entrada");
console.log("matriz 1: " + matriz1);
console.log("matriz 2: " + matriz2 + '\n');

somam();
subm();
determinante();
transposta();
mult();

function somam()
{
	var results = [];
	var ordem1 = matriz1.length;
	var ordem2 = matriz2.length;

	if(ordem1 === ordem2)
	{
		for(var i = 0; i < matriz1.length; i++)
		{
			results[i] = [];
			for(var j = 0; j < matriz1.length; j++)
			{
				results[i][j];
			}
		}
		for(var i = 0; i < matriz1.length; i++)
    	{
        	for(var j = 0; j < matriz1[i].length; j++)
        	{
        		results[i][j] = matriz1[i][j] + matriz2[i][j];
        	}
    	}
    	console.log('A soma eh : ' + results + '\n');
	}else
	{
		console.log('As matrizes devem ter a msm ordem');
	}
}

function subm()
{
	var resultm = [];
	var ordem1 = matriz1.length;
	var ordem2 = matriz2.length;

	if(ordem1 === ordem2)
	{
		for(var i = 0; i < matriz1.length; i++)
		{
			resultm[i] = [];
			for(var j = 0; j < matriz1.length; j++)
			{
				resultm[i][j];
			}
		}
		for(var i = 0; i < matriz1.length; i++)
    	{
        	for(var j = 0; j < matriz1[i].length; j++)
        	{
        		resultm[i][j] = matriz1[i][j] - matriz2[i][j];
        	}
    	}
    	console.log('A subtracao eh : ' + resultm + '\n');
	}else
	{
		console.log('As matrizes devem ter a msm ordem');
	}
}

function determinante()
{
	var resultd = 0;
	var ordem1 = matriz1.length;

	if(ordem1 === 1)
	{
		resultd = matriz1[0][0];
		console.log('O determinante eh : '+resultd);
	}
	if(ordem1 === 2)
	{
		resultd = matriz1[0][0] * matriz1[1][1] - matriz1[0][1] * matriz1[1][0];
		console.log('O determinante eh : '+resultd);
	}	
}

function transposta()
{
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

function mult()
{
  	const conteColunas = ( matriz ) => matriz[ 0 ].length
  	const conteLinhas = ( matriz ) => 
    matriz.filter( list => Array.isArray( list ) ).length
  
  	const possoMultiplicar = ( m1, m2 ) => 
    	conteColunas( m1 ) === conteLinhas( m2 )
  	if(possoMultiplicar( matriz1, matriz2 ) == true)
	{
  	const somandoTudo = ( a, b ) => a + b
  
  	const multipliquePela = ( coluna ) => ( calculado, valorLinha, pos ) => {
    	calculado.push( valorLinha * coluna[ pos ] )
    	return calculado
  	}
  
  	const multipliqueLinhaColuna = ( linha, coluna ) => 
    	linha.reduce( multipliquePela( coluna ), [] ).reduce( somandoTudo )
  
  	const pegueLinha = ( pos, matriz ) => matriz[ pos ]
  	const pegueColuna = ( pos, matriz ) => matriz.map( ( arr ) => arr[ pos ] )
  
  
 	 	const matrizCalculada = ( [ m1, m2 ] = matrizes ) => {
  
    	return m1.map( ( linha, pos ) => 
    	{
      	let contador = 0
      	let vezes = m1.length
      	const valores = []
      	while ( vezes ) {
        	valores.push( multipliqueLinhaColuna( pegueLinha( pos, m1 ), 
        	pegueColuna( contador, m2 ) ) )
        	--vezes
        	++contador
      	}
      	if ( !vezes ) return valores
    	} )
  
  	}
  
  	const resultadoFinal = matrizCalculada( [ matriz1, matriz2 ] )
  	console.log('resultadoFinal: ', resultadoFinal)
	}else {
  	  console.log('errado');
				}
}