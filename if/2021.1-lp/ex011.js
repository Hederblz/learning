class Filme
{
    constructor(nome, duracao)
    {
        this.nome = nome;
        this.duracao = duracao;
    }
}

function filmesIguais(f1, f2)
{
    if(f1.nome == f2.nome && f1.duracao == f2.duracao)
    {
        return true;
    }else
    {
        return false;
    }
}

class ListaFilmes
{

    constructor(filmes)
    {
        this.filmes = filmes;
    }
}

function contemFilme(lista, filme)
{
    for(var i = 0; i<lista.filmes.lenght; i++)
    {
        if(filmesIguais(filme, lista.filmes[i]))
        {
            return true;
        }
    }
    return false;
}

var ghost = new Filme('ghost', 120);
var matrix = new Filme('Matrix', 130);
var blade = new Filme('Blade Runner', 125);

var lista = new ListaFilmes([ghost, matrix, blade]);

console.log(lista);