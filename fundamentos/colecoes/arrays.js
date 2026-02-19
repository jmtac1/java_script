var num = [5, 6, 1, 3, 7]
num.push(4) // adiciona elemento no fim do array
num.sort() // organiza os elementos em ordem numerica ou alfabetica
num.sort().reverse() // organiza os elementos do ultimo para o primeiro
num.pop() // apaga o ultimo elemento
num.unshift(8) // adiciona elemento no inicio do array
num.shift() // remove elemento do inicio do array

console.log(num.indexOf(8))
console.log(num.length)
console.log(num)

console.log('percorrer array da forma tradicional')
for (var p = 0; p < num.length; p++) {
    console.log(num[p])
}

console.log('percorrer array da forma otimizada')
for(var p in num) {
    console.log(num[p])
}
