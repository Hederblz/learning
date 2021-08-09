var resul;

determinante([[1,2,3], [4,5,6], [7,8,1]]);

console.log(resul);

function determinante(a) {
    var ordem = a.length;

    if (ordem === 1) {
        resul = a[0][0];
    }

    if (ordem === 2) {
        resul = a[0][0] * a[1][1] - a[0][1] * a[1][0];
    }

    var det = 0;

    for (var j = 0; j < ordem; j++) {
        det += a[0][j] * cofator(a, 0, j);
    }

    resul = det;
}

function cofator(a, linha, coluna) {
    var sub_matriz = [],
        ordem = a.length,
        m = 0;

    for (var i = 1; i < ordem; i++) {
        sub_matriz[m] = [];

        for (var j = 0; j < ordem; j++) {
            if (j !== coluna) {
                sub_matriz[m].push(a[i][j]);
            }
        }
        m++;
    }

    return (coluna % 2 ? -1 : 1) * determinante(sub_matriz);
}