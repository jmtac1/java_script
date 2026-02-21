// A palavra-chave super no JavaScript é utilizada em classes para chamar o construtor da classe pai (superclasse) ou acessar seus métodos e propriedades.

class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    mover(membro) {
        console.log(`o ${this.nome} se move com o ${membro}`)
    }

}

class Peixe extends Animal {
    constructor(nome, idade, membro) {
        super(nome, idade);
        this.membro = membro;
    }

    nada() {
        super.mover(this.membro)
    }
}

class Cobra extends Animal {
    constructor(nome, idade, membro) {
        super(nome, idade);
        this.membro = membro;
    }

    rasteja() {
        super.mover(this.membro)
    }
}

class Tartaruga extends Animal {
    constructor(nome, idade, membro) {
        super(nome, idade);
        this.membro = membro;
    }

    anda() {
        super.mover(this.membro)
    }
}

const peixe = new Peixe('bob', 3, 'rabo');
const cobra = new Cobra('snake', 5, 'corpo');
const tartaruga = new Tartaruga('tortuga', 50, 'pé palmado')


peixe.nada();
cobra.rasteja();
tartaruga.anda();