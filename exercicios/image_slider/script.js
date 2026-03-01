const imagens = document.querySelectorAll('.slides img');
let slideIndex = 0;

document.addEventListener('DOMContentLoaded', inicializarSlider);

function inicializarSlider() {
    if (imagens.length > 0) {
        imagens[slideIndex].classList.add('mostrarSlide');
    }
}

function mostrarSlide(index) {
    if (index >= imagens.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = imagens.length - 1;
    }

    imagens.forEach(imagem => {
        imagem.classList.remove('mostrarSlide')
    });
    imagens[slideIndex].classList.add('mostrarSlide');
}

function slideAnterior() {
    slideIndex --;
    mostrarSlide(slideIndex);
}

function proximoSlide() {
    slideIndex ++;
    mostrarSlide(slideIndex);
}