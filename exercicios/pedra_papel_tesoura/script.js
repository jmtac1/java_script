const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const jogador = document.getElementById('jogador');
const computador = document.getElementById('computador');
const resultado = document.getElementById('resposta');
const pontosJogador = document.getElementById('pontosJogador');
const pontosComputador = document.getElementById('pontosComputador');
const opcoes = ['pedra', 'papel', 'tesoura'];
let scoreJogador = 0;
let scoreComputador = 0;


pedra.addEventListener('click', evento => {
    let escolhaPc = opcoes[Math.floor(Math.random() * 3)];
    jogador.textContent = '';
    jogador.textContent = 'Jogador: pedra';
    computador.textContent = '';
    resultado.textContent = '';
    if (escolhaPc == 'pedra') {
        computador.textContent = 'Computador: pedra';
        resultado.textContent = 'Empate!';
        resultado.style.color = 'grey'
    }

    if (escolhaPc == 'papel') {
        computador.textContent = 'Computador: papel';
        resultado.textContent = 'Perdeu!';
        resultado.style.color = 'red';
        scoreComputador ++;
        pontosComputador.textContent = '';
        pontosComputador.textContent = `Pontos do computador: ${scoreComputador}`;
    }

    if (escolhaPc == 'tesoura') {
        computador.textContent = 'Computador: tesoura';
        resultado.textContent = 'Ganhou!';
        resultado.style.color = 'green';
        scoreJogador ++;
        pontosJogador.textContent = '';
        pontosJogador.textContent = `Pontos do jogador: ${scoreJogador}`;
    }
});

papel.addEventListener('click', evento => {
    let escolhaPc = opcoes[Math.floor(Math.random() * 3)];
    jogador.textContent = '';
    jogador.textContent = 'Jogador: papel';
    computador.textContent = '';
    resultado.textContent = '';
    if (escolhaPc == 'pedra') {
        computador.textContent = 'Computador: pedra';
        resultado.textContent = 'Ganhou!';
        resultado.style.color = 'green'
        scoreJogador ++;
        pontosJogador.textContent = '';
        pontosJogador.textContent = `Pontos do jogador: ${scoreJogador}`;
    }

    if (escolhaPc == 'papel') {
        computador.textContent = 'Computador: papel';
        resultado.textContent = 'Empate!';
        resultado.style.color = 'grey';
    }

    if (escolhaPc == 'tesoura') {
        computador.textContent = 'Computador: tesoura';
        resultado.textContent = 'Perdeu!';
        resultado.style.color = 'red';
        scoreComputador ++;
        pontosComputador.textContent = '';
        pontosComputador.textContent = `Pontos do computador: ${scoreComputador}`;
    }
});

tesoura.addEventListener('click', evento => {
    let escolhaPc = opcoes[Math.floor(Math.random() * 3)];
    jogador.textContent = '';
    jogador.textContent = 'Jogador: tesoura';
    computador.textContent = '';
    resultado.textContent = '';
    if (escolhaPc == 'pedra') {
        computador.textContent = 'Computador: pedra';
        resultado.textContent = 'Perdeu!';
        resultado.style.color = 'red'
        scoreComputador ++;
        pontosComputador.textContent = '';
        pontosComputador.textContent = `Pontos do computador: ${scoreComputador}`;
    }

    if (escolhaPc == 'papel') {
        computador.textContent = 'Computador: papel';
        resultado.textContent = 'Ganhou!';
        resultado.style.color = 'green';
        scoreJogador ++;
        pontosJogador.textContent = '';
        pontosJogador.textContent = `Pontos do jogador: ${scoreJogador}`;
    }

    if (escolhaPc == 'tesoura') {
        computador.textContent = 'Computador: tesoura';
        resultado.textContent = 'Empate!';
        resultado.style.color = 'grey';
    }
});
