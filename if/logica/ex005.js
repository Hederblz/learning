var cont = 8;

for(i = 0; i < cont; i++)
{
    process.stdout.write("*");
    if(i == 7)
    {
        var cont2 = 6;
        console.log();
        for(ii = 0; ii < cont2; ii++)
        {
            console.log("   **");
        }
    }
}
for(i = 0; i < cont; i++)
{
    process.stdout.write("*");
}