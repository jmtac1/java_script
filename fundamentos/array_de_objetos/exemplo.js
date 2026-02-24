frutas = [{nome: 'maçã', cor: 'vermelho', cal: 95},
          {nome: 'limão', cor: 'verde', cal: 87},
          {nome: 'pera', cor: 'amarelo', cal: 105},
          {nome: 'caju', cor: 'vermelho', cal:86},
          {nome: 'jaca', cor: 'marrom', cal: 250}];

console.log(frutas[1].nome);

frutas.splice(0, 2);

frutas.push({nome: 'uva', cor: 'roxo', cal: '50'});

console.log(frutas);

frutas.forEach(fruta => {
    console.log(fruta.cor);
});

const nomesFrutas = frutas.map(fruta => fruta.nome);

console.log(nomesFrutas);

const frutasVermelhas = frutas.filter(fruta => fruta.cor === 'vermelho');

console.log(frutasVermelhas);

const maiorCal = frutas.reduce((max, fruta) => fruta.cal > max.cal ? fruta : max);

console.log(maiorCal);