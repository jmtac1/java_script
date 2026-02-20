// O método reduce() no JavaScript é uma função de ordem superior que percorre um array para reduzi-lo a um único valor final 

// exemplo 1
const preços = [10, 15, 3, 2.50, 5.85, 0.65];
const total = preços.reduce(soma);

console.log(`R$: ${total.toFixed(2)}`);

function soma(anterior, proximo) {
    return anterior + proximo;
}

// exemplo 2
const notas = [5, 4, 7, 8, 10, 2];
const maximo = notas.reduce(max);

console.log(maximo);

function max(anterior, proximo) {
    return Math.max(anterior, proximo);
}