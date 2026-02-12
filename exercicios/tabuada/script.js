function criar() {
    var numtxt = document.querySelector('input#num')
    var num = Number(numtxt.value)
    var lista = document.querySelector('select#res')
    lista.innerHTML = ''
    
    if (numtxt.value.length == 0) {
        window.alert('faltam dados, tente novamente')
    } else {
        for (var c = 1; c <= 10; c++) {
            var res = document.createElement("option")
            res.value = `res${c}`
            res.text = `${num} x ${c} = ${c * num}`
            lista.appendChild(res)
        }
    }
}


