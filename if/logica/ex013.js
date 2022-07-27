var resul;
ma = [[4,5,6], [7,8,1], [7,8,1]]

determinante(ma);

console.log(resul)
function determinante(a) {
    var ordem = a.length;

    if (ordem === 1) {
        return a[0][0];
    }

    if (ordem === 2) {
        return a[0][0] * a[1][1] - a[0][1] * a[1][0];
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

    //return Math.pow(-1, linha + coluna) * determinante(sub_matriz);
    return (coluna % 2 ? -1 : 1) * determinante(sub_matriz);
}