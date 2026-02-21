/* Getters e setters em JavaScript são métodos especiais que permitem acessar (get) e modificar (set) propriedades de objetos de forma controlada, funcionando como "propriedades virtuais". Eles possibilitam encapsulamento, validação de dados antes de salvá-los e a criação de propriedades calculadas, melhorando a segurança e a manutenibilidade do código. */

class Retangulo {
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
console.log(retangulo.area);