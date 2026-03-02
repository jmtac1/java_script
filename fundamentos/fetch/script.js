// O fetch() em JavaScript é uma API moderna e nativa para realizar requisições HTTP assíncronas (AJAX), permitindo buscar recursos (como dados JSON ou HTML) de um servidor sem recarregar a página. Baseado em Promises, ele facilita o tratamento de respostas com sintaxe simples (.then() ou async/await).


// usando promises
// fetch('https://pokeapi.co/api/v2/pokemon/mew')
//     .then(resposta => {
//         if (!resposta.ok) {
//             throw new Error('requisição não encontrada');
//         }
//         return resposta.json();
//     })
//     .then(dados => console.log(dados))
//     .catch(erro => console.error(erro))

// usando async/await
buscarDados();

async function buscarDados() {
    try {
        const nomePokemon = document.getElementById('nome').value.toLowerCase();
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
        if (!resposta.ok) {
            throw new Error('requisição não encontrada');
        }
        
        const pokemon = await resposta.json();
        const spritePokemon = pokemon.sprites.front_shiny;
        const imagem = document.getElementById('pokemon');
        imagem.src = spritePokemon;
        imagem.style.display = 'block';

    } catch(erro) {
        console.error(erro)
    }
}