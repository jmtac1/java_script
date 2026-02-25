// O método sort() ordena os elementos do próprio array e retorna o array ordenado. Seu funcionamento pode ser modificado a partir de uma função recebida como parâmetro, que determinará a condição do processo, isso é importante, pelo fato da ordenação padrão ser de acordo com a pontuação do código unicode.

let nomes = ['joao', 'maria', 'jose', 'pedro', 'ana'];

console.log(nomes);

nomes.sort();

console.log(nomes);

nomes.sort().reverse(); // para organizar de tras pra frente

console.log(nomes);

let numeros = [1, 10, 2, 6, 5, 9, 8];

console.log(numeros);

numeros.sort((a, b) => a - b); // melhor forma de organizar um array numericamente

console.log(numeros);

numeros.sort((a, b) => b - a); // para organizar de tras pra frente

console.log(numeros);

