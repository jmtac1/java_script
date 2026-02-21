class Animal {
    vivo = true;

    comer() {
        console.log(`esse ${this.nome} esta comendo`);
    }
    mover() {
        console.log(`esse ${this.nome} esta se movendo`);
    }
}

class Gato extends Animal {
    nome = 'gato';

    miar() {
        console.log('o gato mia');
    }
}

class Cachorro extends Animal {
    nome = 'cachorro';

    latir() {
        console.log('o cachorro late');
    }
}

const cachorro = new Cachorro();
const gato = new Gato();

console.log(gato.vivo)
gato.comer();
gato.mover();
gato.miar();

cachorro.vivo = false;

console.log(cachorro.vivo);
cachorro.comer();
cachorro.mover();
cachorro.latir();