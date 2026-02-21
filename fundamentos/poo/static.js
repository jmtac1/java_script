// A palavra-chave static em JavaScript define métodos ou propriedades estáticas em uma classe, que pertencem à própria classe e não às suas instâncias (objetos).

// exemplo 1
class MathUtil {
    static PI = 3.14159;

    static diametro(raio) {
        return raio * 2;
    }

    static circunferencia(raio) {
        return 2 * this.PI * raio;
    }

    static area(raio) {
        return this.PI * raio * raio;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.diametro(2));
console.log(MathUtil.circunferencia(10));
console.log(MathUtil.area(10));

// exemplo 2
class Usuario {
    static usuarios = 0;

    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;

        Usuario.usuarios ++;
    }

    static getUsuarios() {
        console.log(`existem ${Usuario.usuarios} usuarios`);
    }
}

const usuario1 = new Usuario('joao', 'manoel');
const usuario2 = new Usuario('maria', 'ana');
console.log(Usuario.usuarios);
Usuario.getUsuarios();