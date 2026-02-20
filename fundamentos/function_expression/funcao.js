/* Uma function expression (expressão de função) em JavaScript é uma função definida dentro de uma expressão, geralmente atribuída a uma variável, permitindo criar funções anônimas (sem nome) ou nomeadas que só podem ser chamadas após a sua definição. */

// exemplo 1
let bomDia = function() {
    console.log('bom dia!');
}

bomDia();

// exemplo 2
setTimeout(function(){
    console.log('boa noite!');
}, 3000);

// exemplo 3
const numeros = [1, 2, 3, 4, 5, 6];

const dobro = numeros.map(function(elemento) {
    return Math.pow(elemento, 2);
})

const par = numeros.filter(function(elemento) {
    return elemento % 2 === 0;
})

const soma = numeros.reduce(function(anterior, proximo) {
    return anterior + proximo;
})

console.log(dobro);
console.log(par);
console.log(soma);