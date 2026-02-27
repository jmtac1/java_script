// exemplo 1: h1
const novoH1 = document.createElement('h1');
novoH1.textContent = 'caixas';
// document.body.append(novoH1); = adiciona elemento na ultima posição
// document.body.prepend(novoH1); = adiciona elemento na primeita posição
novoH1.style.color = 'teal';
novoH1.id = 'caixas';
const caixa2 = document.getElementById('caixa2');
const caixa3 = document.getElementById('caixa3')
document.body.insertBefore(novoH1, caixa2);

document.body.removeChild(caixa3);