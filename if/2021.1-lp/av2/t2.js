var matriz1 = [[2,3],[4,1],[4,4]];
var matriz2 = [[0,-1],[2,3],[4,4]];

console.log("Entrada");
console.log("matriz 1: " + matriz1);
console.log("matriz 2: " + matriz2);
console.log();
somam();
subm();
function somam()
{
	var results = [];
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
    console.log(results);
}

function subm()
{
	var resultm = [];
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
    console.log(resultm);
}