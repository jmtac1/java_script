// O método filter() em JavaScript cria um novo array contendo apenas os elementos de um array original que atendem a um critério definido por uma função de callback.
// a função de callback deve retornar um valor booleano.

// exemplo 1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numeros.filter(pares));
console.log(numeros.filter(impares));

function pares(elemento) {
    return elemento % 2 === 0;
}

function impares(elemento) {
    return elemento % 2 !== 0;
}

// exemplo 2
const idades = [15, 14, 18, 20, 35, 40];
const menores = idades.filter(menor);

console.log(menores);

function menor(elemento) {
    return elemento < 18;
}
