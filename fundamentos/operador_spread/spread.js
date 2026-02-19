// O operador spread (...) efetivamente dá acesso a todos os itens dentro desses objetos iteráveis, separando esses items individualmente.

let nums = [1, 2, 3, 4, 5];
let maximo = Math.max(...nums); // o operador spread separou os items desse array para que o metodo .max() funcione

console.log(maximo);

let nome = 'joao manoel';
let letras = [...nome]; // o operador separou todas as letras do meu nome e cada letra virou um elemento do array
console.log(letras);