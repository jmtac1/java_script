// Objetos aninhados em JavaScript são objetos que contêm outros objetos ou arrays como propriedades.

// exemplo 1, Usando literais de objeto (a forma mais comum):
const pessoa = {
    nome: 'joao',
    idade: 20,
    endereco: { // objeto aninhado
        rua: 'rua carlos',
        cidade: 'maceio',
        estado: 'AL'    
    },
    coresFavoritas: ['azul', 'vermelho', 'cinza'] // array aninhado
};

console.log(pessoa.endereco);
console.log(...pessoa.coresFavoritas);

// exemplo 2, Usando classes JavaScript (ES6) para uma abordagem mais estruturada:
// class Endereco {
//     constructor(rua, cidade, estado) {
//         this.rua = rua;
//         this.cidade = cidade;
//         this.estado = estado;
//     }
// }

// class Pessoa {
//     constructor(nome, idade, endereco) {
//         this.nome = nome;
//         this.idade = idade;
//         this.endereco = endereco;
//     }
// }

// const endereco = new Endereco('rua carlos', 'maceio', 'AL');
// const pessoa1 = new Pessoa('joao', 20, endereco);

// console.log(pessoa1.endereco.cidade);
