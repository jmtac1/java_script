// Destructuring (desestruturação) em JavaScript é uma sintaxe expressiva introduzida no ES6 que permite extrair dados de arrays ou objetos para variáveis distintas de forma concisa.

// exenplo 1: trocar o valor de duas variaveis
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);

//exemplo 2: trocar dois elementos em um array
comidas = ['pao', 'queijo', 'presunto', 'tomate', 'alface', 'hamburger'];

[comidas[0], comidas[2]] = [comidas[2], comidas[0]];

console.log(comidas);

// exemplo 3: definir elementos de array para variaveis
const [primeiraComida, segundaComida, terceiraComida, ...resto] = comidas;

console.log(primeiraComida, segundaComida, terceiraComida, resto);

// exemplo 4: extrair valores de objetos
const pessoa1 = {
    nome: 'joao',
    sobreNome: 'manoel',
    idade: 20,
    cabelo: 'loiro'
}
const pessoa2 = {
    nome: 'maria',
    sobreNome: 'ana',
    idade: 23
}

const {nome, sobreNome, idade, cabelo = 'preto'} = pessoa2;

console.log(nome);
console.log(sobreNome);
console.log(idade);
console.log(cabelo);

// exemplo 5: destructure em parametros de função
function mostrarPessoa({nome, sobreNome, idade, cabelo = 'preto'}) {
    console.log(`${nome} ${sobreNome} tem ${idade} anos e tem cabelo ${cabelo}`)
}

mostrarPessoa(pessoa2);