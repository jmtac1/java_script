// Uma NodeList em JavaScript é uma coleção de nós (elementos HTML) obtida da DOM, semelhante a um Array, mas com limitações. Geralmente retornada por {Link: querySelectorAll(), ela permite acessar itens por índice, possui a propriedade .length e aceita o método .forEach(), sendo em grande parte estática

let botaos = document.querySelectorAll('.botao');

const novoBotao = document.createElement('button');
novoBotao.textContent = 'botão 5';
novoBotao.classList = 'botao';
document.body.appendChild(novoBotao);
botaos = document.querySelectorAll('.botao');

botaos.forEach(botao => {
    botao.style.backgroundColor = 'blue';
    botao.addEventListener('click', evento => {
        evento.target.style.backgroundColor = 'navy';
        evento.target.remove();
        botaos = document.querySelectorAll('.botao');
        console.log(botaos);
    });

    botao.addEventListener('mouseover', evento => {
        evento.target.style.backgroundColor = 'tomato';
    });

    botao.addEventListener('mouseout', evento => {
        evento.target.style.backgroundColor = 'pink';
    });
});
