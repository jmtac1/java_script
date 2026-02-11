function verificar() {
    var anotxt = document.getElementById('ano')
    var ano = Number(anotxt.value)
    var agora = new Date()
    var idade = agora.getFullYear() - ano
    var sexo = document.querySelector('input[name="sexo"]:checked')
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    

    if (idade < 13 && sexo.value == 'm') {
        msg.innerHTML = `pessoa de ${idade} anos` 
        img.src = 'imagens/criança_m.jpg'
    } else if (idade < 13 && sexo.value == 'f') {
        msg.innerHTML = `pessoa de ${idade} anos` 
        img.src = 'imagens/criança_f.jpg'
    } else if (idade < 18 && sexo.value == 'm') {
        msg.innerHTML = `pessoa de ${idade} anos` 
        img.src = 'imagens/adolecente_m.jpg'
    } else if (idade < 18 && sexo.value == 'f') {
        msg.innerHTML = `pessoa de ${idade} anos` 
        img.src = 'imagens/adolecente_f.jpg'
    } else if (idade < 60 && sexo.value == 'm') {
        msg.innerHTML = `pessoa de ${idade} anos` 
        img.src = 'imagens/adulto_m.jpg'
    } else if (idade < 60 && sexo.value == 'f') {
        msg.innerHTML = `pessoa de ${idade} anos` 
        img.src = 'imagens/adulto_f.jpg'
    } else if (idade >= 60 && sexo.value == 'm') {
        msg.innerHTML = `pessoa de ${idade} anos` 
        img.src = 'imagens/idoso_m.jpg'
    } else if (idade >= 60 && sexo.value == 'f') {
        msg.innerHTML = `pessoa de ${idade} anos` 
        img.src = 'imagens/idoso_f.jpg'
    }
}