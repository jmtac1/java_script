// Um objeto JavaScript é uma estrutura de dados fundamental, composta por uma coleção de pares chave-valor (propriedades e métodos) que representam entidades do mundo real ou dados organizados

const pessoa = {
    primeiroNome: 'joao',
    ultimoNome: 'manoel',
    idade: 20,
    eProgramador: true,
    dizerBomDia: () => console.log('bom dia!'),
    dizerBoaNoite: () => console.log('boa noite!')
}

console.log(pessoa.primeiroNome);
console.log(pessoa.ultimoNome);
console.log(pessoa.idade);
console.log(pessoa.eProgramador);
pessoa.dizerBomDia();
pessoa.dizerBoaNoite();