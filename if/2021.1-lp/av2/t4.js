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
  matriz.filter( linha => Array.isArray( linha ) ).length

const possoMultiplicar = ( m1, m2 ) => 
  conteColunas( m1 ) === conteLinhas( m2 )

console.log(`possoMultiplicar: `, possoMultiplicar( matriz1, matriz2 ) )
//true