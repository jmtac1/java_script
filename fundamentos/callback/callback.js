// As funções de callback em JavaScript são funções passadas como argumentos para outras funções.
// garantindo que uma função aconteça antes de continuar o script, mesmo que essa função demore algum tempo

bomDia(boaNoite);

function bomDia(callback) {
    console.log('bom dia!');
    callback();
}

function boaNoite() {
    console.log('boa noite!');
}