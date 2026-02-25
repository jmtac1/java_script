// metodo console.time() diz o tempo que levou para executar um codigo

console.time('teste');

for (let i = 0; i < 1000000; i ++) {
    // codigo
}

console.timeEnd('teste');