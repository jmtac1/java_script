// o parametro rest (...) permite a função ter um numero indefinido de parametros, agrupando os parametros em um array

function numeros(...nums) {
    console.log(nums);
}

const num1 = 1;
const num2 = 2;
const num3 = 3;
const num4 = 4;
const num5 = 5;

numeros(num1, num2, num3, num4, num5);

function somar(...nums) {
    let soma = 0;
    for (const n of nums) {
        soma += n;
    }
    return soma;
}

console.log(somar(5, 2, 9, 7, 7));

function comidas(comida1, comida2, ...comidas) {
    console.log('comida1: ', comida1);
    console.log('comida2: ', comida2)
    console.log(...comidas)
}

comidas('pao', 'queijo', 'ovo', 'farinha', 'leite');