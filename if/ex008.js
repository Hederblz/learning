function somaVetor(vetor)
{
    var soma = 0;

    for(var i = 0; i < vetor.length; i++)
    {
        soma = soma + vetor[i];
    }
    return soma
}

var array = [1,2,3,4,5,6,7,8,9];

var resultado = somaVetor(array)

console.log(resultado);