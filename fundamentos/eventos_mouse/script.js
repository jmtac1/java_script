const caixa = document.getElementById('caixa');

caixa.addEventListener('click', evento => {
    evento.target.style.backgroundColor = 'red';
    evento.target.textContent = 'clicou';
});

caixa.addEventListener('mouseenter', evento => {
    evento.target.style.backgroundColor = 'yellow';
    evento.target.textContent = 'passou em cima';
});

caixa.addEventListener('mouseout', evento => {
    evento.target.style.backgroundColor = 'seagreen';
    evento.target.textContent = 'saiu de cima';
});