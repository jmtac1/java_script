class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    mostrarProduto() {
        console.log(`produto: ${this.nome}, preço: R$${this.preco.toFixed(2)}`)
    }
    calcularImposto(porcentagem) {
        this.preco += (this.preco * porcentagem) / 100;
    }
}

const produto1 = new Produto('sabão', 19.99);

produto1.calcularImposto(5);
produto1.mostrarProduto();
