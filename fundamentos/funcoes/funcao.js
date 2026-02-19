function parOuImpar(n) {
    if (n % 2 == 0) {
        console.log('par')
    } else {
        console.log('impar')
    }
}

function soma(n1=0, n2=0) {
    console.log(n1 + n2)
}

//função dentro de uma variavel
let dobro = function(x) {
    return x * 2
} 

function fatorial(n) {
    let fat = 1
    for (let c = n; c >= 1; c--) {
        fat *= c
    }
    console.log(fat)
}

// função fatorial recursiva:
function fatorialRec(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorialRec(n - 1)
    }
}

parOuImpar(16)
soma(3, 5)
console.log(dobro(12))
fatorial(5)
console.log(fatorialRec(5))