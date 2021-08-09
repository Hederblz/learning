const matriz1 = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 1, 2, 3 ]
  ]
  
  const matriz2 = [
    [ 7,  8  ],
    [ 9,  10 ],
    [ 1,  2  ]
  ]
  
  
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