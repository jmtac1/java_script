function contar() {
    var iniciotxt = document.querySelector('input#ini')
    var fimtxt = document.querySelector('input#fim')
    var passotxt = document.querySelector('input#pas')
    var msg = document.querySelector('p#msg')
    var cont = document.querySelector('p#cont')
    var f = document.querySelector('p#f')
    var inicio = Number(iniciotxt.value)
    var fim = Number(fimtxt.value)
    var passo = Number(passotxt.value)


    if (iniciotxt.value.length == 0 || fimtxt.value.length == 0 || passotxt.value.length == 0) {
        window.alert('faltam dados, tente novamente')
    } else {
        msg.innerHTML = 'Contando: '
        if (passo <= 0) {
            window.alert('passo ínvalido, considerando passo 1')
            passo = 1
        }
        if (inicio < fim) {
            if (cont.innerHTML == '') {
               for (var c = inicio; c <= fim; c += passo) {
                cont.innerHTML += `${c} &#x1F449 `
                } 
            }
        } else {
            if (cont.innerHTML == '') {
                for (var c = inicio; c >= fim; c -= passo) {
                cont.innerHTML += `${c} &#x1F449 `
                }
            }
        }
        f.innerHTML = '&#x1F3C1'
    }
}