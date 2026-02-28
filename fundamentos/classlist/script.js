// A propriedade classList em JavaScript é uma API que facilita a manipulação das classes CSS de um elemento HTML. Ela é uma alternativa mais prática e segura à manipulação direta da string className, pois fornece métodos específicos para adicionar, remover ou alternar classes sem afetar as demais. 
let botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
    botao.classList.add('ativo');
});

botoes.forEach(botao => {
    botao.addEventListener('mouseover', evento => {
        evento.target.classList.toggle('hover');
    });
});

botoes.forEach(botao => {
    botao.addEventListener('mouseout', evento => {
        evento.target.classList.toggle('hover');
    });
});

botoes.forEach(botao => {
    botao.addEventListener('click', evento => {
        evento.target.classList.replace('ativo', 'desativo');

        if (evento.target.classList.contains('desativo')) {
            evento.target.textContent = 'desativo';
        }
    });
})
const h1 = document.getElementById('h1');
h1.classList.add('ativo');

h1.addEventListener('click', evento => {
    evento.target.classList.replace('ativo', 'desativo');

    if (evento.target.classList.contains('desativo')) {
        evento.target.textContent = 'desativo';
    }
});

h1.addEventListener('mouseover', evento => {
    evento.target.classList.toggle('hover');
});

h1.addEventListener('mouseout', evento => {
    evento.target.classList.toggle('hover');
});

