var numeros = []
var lista = document.querySelector('select#res')
var msg = document.querySelector('p#msg')
function adicionar() {
    let numtxt = document.querySelector('input#num')
    let num = Number(numtxt.value)

    if (numeros.includes(num) || numtxt.value.length == 0 || num < 1 || num > 100) {
        window.alert('valor ínvalido ou ja encontrado na lista')
    } else {
        numeros.push(num)
        var res = document.createElement("option")
        res.value = `val${num}`
        res.text = `Valor ${num} adicionado`
        lista.appendChild(res)
    }
    numtxt.value = ''
    numtxt.focus()
    msg.innerHTML = ''
}
function finalizar() {
    function maior(l) {
        let maior = 0
        for (let n in l) {
            if (l[n] > maior) {
                maior = l[n]
            }
        }
        return maior
    }
    function menor(l) {
        let menor = maior
        for (let n in l) {
            if (l[n] < menor) {
                menor = l[n]
            }
        }
        return menor
    }
    function soma(l) {
        let soma = 0
        for (let n in l) {
            soma += l[n]
        }
        return soma
    }
    if (numeros.length == 0) {
        window.alert('adicione valores para ver o resultado')
    } else {
        var maior = maior(numeros)
        var menor = menor(numeros)
        var soma = soma(numeros)
        var media = soma / numeros.length
        msg.innerHTML = `
        <p>Ao todo temos ${numeros.length} elementos</p>
        <p>O maior valor informado é: ${maior}</p>
        <p>O menor valor informado é: ${menor}</p>
        <p>A soma dos valores é: ${soma}</p>
        <p>A média dos valores é: ${media}</p>`
    }
}