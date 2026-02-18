var num = [5, 6, 1, 3, 7]
num.push(4)
num.sort()
num.pop()

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
