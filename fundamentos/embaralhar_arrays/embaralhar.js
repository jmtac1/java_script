let baralho = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

console.log(baralho);

embaralhar(baralho);

console.log(baralho);

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const aleatorio = Math.floor(Math.random() * (i + 1));
        [array[i], array[aleatorio]] = [array[aleatorio], array[i]];
    }
}