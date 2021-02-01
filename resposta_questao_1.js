const array = [1, 2, 3, 4, 6, 7]
const array2 = [9, 7, 2, 5]



function ordenado(arr) {
    let arrayDuplicado = arr.slice().sort();

    if (arr.join() === arrayDuplicado.join()) {
        console.log('ORDENADO')

    } else {
        console.log('Não está ordenado')
    }
}


console.log(ordenado(array))
console.log(ordenado(array2))