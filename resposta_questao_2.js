const array = [4, 5, 44, 98, 4, 5, 6, 7];

function Duplicado(arr) {
    /* slice() para retornar uma copia do array 
    sort() para ordenar ele para fazer a verificação */
    let arrayDuplicado = arr.slice().sort();

    /* um array de resultado vazio para armazenar os duplicados */
    let resultado = [];

    /* for para percorrer o numero de array */
    for (let i = 0; i <= arrayDuplicado.length - 1; i++) {

        /* verificação para se caso o array for igual ao proximo */
        if (arrayDuplicado[i + 1] == arrayDuplicado[i]) {
            /*  joga o resultado na variavel que armazena os duplciados */
            resultado.push(arrayDuplicado[i]);
        }
    }
    /*  retorna os valores duplicados */
    return resultado;
}

console.log(`Array ${array}.  Valores Duplicados: ${Duplicado(array)}.`);