function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
    var body = document.body
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    msg.innerHTML = `agora são ${hora} horas.`

    if (hora < 12) {
        body.style.backgroundColor = 'rgb(194, 194, 95)'
        img.src = 'imagens/bom_dia.jpg'
    } else if (hora < 19) {
        body.style.backgroundColor = 'rgb(245, 141, 84)'
        img.src = 'imagens/boa_tarde.jpg'
    } else {
        body.style.backgroundColor = 'rgb(48, 48, 63)'
        img.src = 'imagens/boa_noite.jpg'
    }
}
