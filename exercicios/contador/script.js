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


    if (passo == 0) {
        window.alert('digite um valor maior que 0')
    } else {
        msg.innerHTML = 'Contando: '
        for (var c = inicio; c <= fim; c += passo) {
            cont.innerHTML += `${c} &#x1F449 `
        }
        f.innerHTML = '&#x1F3C1'
    }
}