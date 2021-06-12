var cont = 38;

//cima
for(var i = 0; i < cont; i++)
{
    process.stdout.write("*");
    //letra I
    if(i == 8){
        process.stdout.write("  ");
    }
    //letra F
    if(i == 18){
        process.stdout.write("  ");
    }
}
var contI = 6;
console.log();
//letra I
    for(var i = 0; i < contI; i++)
    {
        console.log("   **      **");
    }

//Baixo
var cont2 = 9;
var cont3 = 9;

for(var i = 0; i < cont2; i++)
{
    process.stdout.write("*");
    //letra I
    if(i == 9)
    {
        process.stdout.write("  ");
    } 
}
//letra F
process.stdout.write("  **");
process.stdout.write("          ");
//letra P
process.stdout.write("**");
process.stdout.write("          ");
//letra E
process.stdout.write("**********");