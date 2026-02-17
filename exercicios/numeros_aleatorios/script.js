const botao = document.querySelector('#rolar');
const numero = document.querySelector('#num');
const min = 1;
const max = 100;
let numeroAleatorio;

botao.onclick = function() {
    numeroAleatorio = Math.floor((Math.random() * max)) + min;
    numero.textContent = numeroAleatorio;
}