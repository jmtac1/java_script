const numerotxt = document.getElementById('num');
const botao = document.getElementById('enviar');
const resultado = document.getElementById('res');
const dados = document.getElementById('dados');

botao.onclick = function() {
    let num = Number(numerotxt.value);
    let nums = [];
    dados.innerHTML = '';

    for (let i = 0; i < num; i++) {
        let numAleatorio = Math.floor(Math.random() * 6) + 1;
        nums.push(numAleatorio); 
    }

    resultado.textContent = `dados: ${nums.join(', ')}`

    for (i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            let novaImagem = document.createElement('img');
            novaImagem.src = 'imagens/dado1.png';
            novaImagem.alt = `dado${i}`;
            dados.appendChild(novaImagem);
        } else if (nums[i] == 2) {
            let novaImagem2 = document.createElement('img');
            novaImagem2.src = 'imagens/dado2.png';
            novaImagem2.alt = `dado${i}`;
            dados.appendChild(novaImagem2);
        } else if (nums[i] == 3) {
            let novaImagem3 = document.createElement('img');
            novaImagem3.src = 'imagens/dado3.png';
            novaImagem3.alt = `dado${i}`;
            dados.appendChild(novaImagem3);
        } else if (nums[i] == 4) {
            let novaImagem4 = document.createElement('img');
            novaImagem4.src = 'imagens/dado4.png';
            novaImagem4.alt = `dado${i}`;
            dados.appendChild(novaImagem4);
        } else if (nums[i] == 5) {
            let novaImagem5 = document.createElement('img');
            novaImagem5.src = 'imagens/dado5.png';
            novaImagem5.alt = `dado${i}`;
            dados.appendChild(novaImagem5);
        } else if (nums[i] == 6) {
            let novaImagem6 = document.createElement('img');
            novaImagem6.src = 'imagens/dado6.png';
            novaImagem6.alt = `dado${i}`;
            dados.appendChild(novaImagem6);
        }
    }
}