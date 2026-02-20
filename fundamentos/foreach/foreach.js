// é um método de Array usado para iterar sobre elementos, executando uma função de callback para cada item
// Ele simplifica loops manuais, aceitando parâmetros para o valor, índice e o array completo.

// exemplo 1
let numeros = [1, 2, 3, 4, 5];

numeros.forEach(dobrar);
numeros.forEach(triplicar);
numeros.forEach(mostrar);

function dobrar(elemento, index, array) {
    array[index] = elemento * 2;
}

function triplicar(elemento, index, array) {
    array[index] = elemento * 3;
}

function mostrar(elemento) {
    console.log(elemento);
}

//exemplo 2
let nomes = ['joao', 'pedro', 'maria', 'jose'];

// nomes.forEach(maiusculo);
nomes.forEach(letraMaiuscula);
nomes.forEach(mostrar);

function maiusculo(elemento, index, array) {
    array[index] = elemento.toUpperCase();
}

function letraMaiuscula(elemento, index, array) {
    array[index] = elemento[0].toUpperCase() + elemento.slice(1);
}