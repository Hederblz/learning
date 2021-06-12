const prompt = require('prompt-sync')();
var f = 0;
var media;

alunos = Number(prompt("Digite o numero de alunos: "));
for(var i = 1; i <= alunos; i++)
{
    notas =Number(prompt("Digite a nota do alunos "+ i +" : "));
    f = notas + f;
    media = (f/alunos);
}

console.log("a media eh : "+ media);