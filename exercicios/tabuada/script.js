function criar() {
    var numtxt = document.querySelector('input#num')
    var num = Number(numtxt.value)
    var lista = document.querySelector('select#res')
    
    for (var c = 1; c <= 10; c++) {
        var res = document.createElement("option")
        res.value = `res${c}`
        res.text = `${num} x ${c} = ${c * num}`
        lista.appendChild(res)
    }
}


