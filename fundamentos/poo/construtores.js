function Carro(marca, modelo, ano, cor) {
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano,
    this.cor = cor,
    this.mensagem = function() {
        console.log(`voce ta dirigindo um ${this.marca} ${this.modelo}`)
    }
}

const carro1 = new Carro('ford', 'ka', 2007, 'azul');
const carro2 = new Carro('chevrolet', 'chevette', 1996, 'bege')

console.log(carro1.marca);
console.log(carro1.modelo);
console.log(carro1.ano);
console.log(carro1.cor);

console.log(carro2.marca);
console.log(carro2.modelo);
console.log(carro2.ano);
console.log(carro2.cor);

carro1.mensagem();
carro2.mensagem();