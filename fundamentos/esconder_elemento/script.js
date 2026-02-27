const botao = document.getElementById('botao');
const img = document.getElementById('img');

botao.addEventListener('click', evento => {
    if (img.style.visibility === 'hidden') {
        img.style.visibility = 'visible';
        botao.textContent = 'esconder';
    } else {
        img.style.visibility = 'hidden';
        botao.textContent = 'mostrar';
    }


});