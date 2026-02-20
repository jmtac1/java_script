// Arrow functions (ou funções de seta) são uma forma concisa de escrever funções no JavaScript (ES6).

// exemplo 1
let bomDia = (nome, anos) => {
    console.log(`bom dia, ${nome}! voce tem ${anos} anos`)
}

bomDia('joao', 15);

//exemplo 2
const numeros = [1, 2, 3, 4, 5, 6];

const dobro = numeros.map(elemento => Math.pow(elemento, 2));

const par = numeros.filter(elemento => elemento % 2 === 0);

const soma = numeros.reduce((anterior, proximo) => anterior + proximo);

console.log(dobro);
console.log(par);
console.log(soma);