const tela = document.getElementById('tela');

function adicionarNaTela(input) {
    tela.value += input;
}

function calcular() {
    try {
        tela.value = eval(tela.value);
    } catch (erro) {
        tela.value = 'error'
    }
}

function limparTela() {
    tela.value = '';
}