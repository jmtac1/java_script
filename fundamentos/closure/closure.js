// Uma closure no JavaScript é a combinação de uma função com o ambiente léxico onde ela foi criada, permitindo que a função interna acesse escopos externos mesmo após a função externa finalizar. Ela "lembra" do estado de variáveis de escopo superior, sendo crucial para encapsular dados, criar variáveis privadas e em padrões assíncronos.


// exenplo 1: encapsular variaveis
function externa() {
    const mensagem = 'bom dia!';

    function interna() {
        console.log(mensagem);
    }

    interna();
}

mensagem = 'boa noite!';

externa();

// exemplo 2: manter o estado da variavel
function contagem() {
    let cont = 0;

    function incrementar() {
        cont++;
        console.log(`o contador esta em ${cont}`);
    }

    function getCont() {
        return cont;
    }

    return {incrementar, getCont}; // retorna um objeto que os metodos são as funções internas
}

const contador = contagem();

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();

console.log(contador.getCont());

// exemplo 3
function criarJogo() {
    let score = 0;

    function incrementarScore(pontos) {
        score += pontos;
        console.log(`+ ${pontos} pontos`);
    }

    function decrementarScore(pontos) {
        score -= pontos;
        console.log(`- ${pontos} pontos`);
    }

    function getScore() {
        return score;
    }

    return {incrementarScore, decrementarScore, getScore}
}

const game = criarJogo();

game.incrementarScore(5);
game.decrementarScore(3);
game.incrementarScore(5);

console.log(game.getScore());