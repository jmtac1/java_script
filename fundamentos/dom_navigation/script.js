// A navegação no DOM com JavaScript permite percorrer a estrutura de árvore do HTML (elementos pai, filho e irmãos) para acessar ou modificar elementos.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children = retorna um html collection

// .firstElementChild
const frutas = document.getElementById('frutas');
const primeiroElementoFilho = frutas.firstElementChild;
primeiroElementoFilho.style.color = 'red';

// .lastElementChild
const ultimoElementoFilho = frutas.lastElementChild;
ultimoElementoFilho.style.color = 'purple';

// .nextElementSibling
const chocolate = document.getElementById('chocolate');
const proximoElementoIrmao = chocolate.nextElementSibling;
proximoElementoIrmao.style.color = 'lightblue';

// .previousElementSibling
const pirulito = document.getElementById('pirulito');
const elementoIrmaoAnterior = pirulito.previousElementSibling;
elementoIrmaoAnterior.style.color = 'brown'

//.parentElement
const maça = document.getElementById('maça');
const elementoPai = maça.parentElement;
elementoPai.style.backgroundColor = 'lightgreen';

// .children
const salgados = document.getElementById('salgados');
const elementosFilhos = salgados.children;
for (let filho of elementosFilhos) {
    filho.style.color = 'darkred';
}