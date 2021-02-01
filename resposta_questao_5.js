function Analise(n) {

    var resultado = 1;
    for (var i = 1; i <= n; i++) {
        resultado *= i

    }
    return resultado
}

console.log(Analise(5))