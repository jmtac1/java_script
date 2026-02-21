/* Getters e setters em JavaScript são métodos especiais que permitem acessar (get) e modificar (set) propriedades de objetos de forma controlada, funcionando como "propriedades virtuais". Eles possibilitam encapsulamento, validação de dados antes de salvá-los e a criação de propriedades calculadas, melhorando a segurança e a manutenibilidade do código. */

// exemplo 1
/* class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    set largura(novaLargura) {
        if (novaLargura > 0) {
            this._largura = novaLargura;
        } else {
            console.error('largura tem que ser maior que 0');
        }
    }

    set altura(novaAltura) {
        if (novaAltura > 0) {
            this._altura = novaAltura;
        } else {
            console.error('altura tem que ser maior que 0');
        }
    }

    get largura() {
        return this._largura;
    }

    get altura() {
        return this._altura;
    }

    get area() {
        return this._largura * this._altura;
    }
}



const retangulo = new Retangulo(50, 12);

retangulo.largura = 10;
retangulo.altura = 5;

console.log(retangulo.largura);
console.log(retangulo.altura);
console.log(retangulo.area); */

// exemplo 2
class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    set nome(novoNome) {
        if (typeof novoNome === 'string' && novoNome.length > 0) {
            this._nome = novoNome;
        } else {
            console.error('nome tem que ser string e ter mais que 0 caracteres');
        }
    }
    set sobrenome(novoSobrenome) {
        if (typeof novoSobrenome === 'string' && novoSobrenome.length > 0) {
            this._sobrenome = novoSobrenome;
        } else {
            console.error('nome tem que ser string e ter mais que 0 caracteres');
        }
    }
    set idade(novaIdade) {
        if (typeof novaIdade === 'number' && novaIdade > 0) {
            this._idade = novaIdade;
        } else {
            console.error('idade tem que ser um numero e ser maior que 0')
        }
    }

    get nome() {
        return this._nome;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    get idade() {
        return this._idade;
    }
    get nomeCompleto() {
        return this._nome + ' ' + this._sobrenome;
    }
}

const pessoa = new Pessoa('joao', 'manoel', 20);
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);
console.log(pessoa.nomeCompleto);