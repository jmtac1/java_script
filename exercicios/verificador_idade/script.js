function verificar() {
    var anotxt = document.getElementById('ano')
    var ano = Number(anotxt.value)
    var agora = new Date()
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    if (ano == 0 || ano > agora.getFullYear()) {
        window.alert('verifique se os dados estão corretos')
    } else {
        var idade = agora.getFullYear() - ano
        var sexo = document.querySelector('input[name="sexo"]:checked')
    }
    if (idade < 13 && sexo.value == 'm') {
        msg.innerHTML = `criança de ${idade} anos` 
        img.src = 'imagens/criança_m.jpg'
    } else if (idade < 13 && sexo.value == 'f') {
        msg.innerHTML = `criança de ${idade} anos` 
        img.src = 'imagens/criança_f.jpg'
    } else if (idade < 18 && sexo.value == 'm') {
        msg.innerHTML = `adolecente de ${idade} anos` 
        img.src = 'imagens/adolecente_m.jpg'
    } else if (idade < 18 && sexo.value == 'f') {
        msg.innerHTML = `adolecente de ${idade} anos` 
        img.src = 'imagens/adolecente_f.jpg'
    } else if (idade < 60 && sexo.value == 'm') {
        msg.innerHTML = `adulto de ${idade} anos` 
        img.src = 'imagens/adulto_m.jpg'
    } else if (idade < 60 && sexo.value == 'f') {
        msg.innerHTML = `adulto de ${idade} anos` 
        img.src = 'imagens/adulto_f.jpg'
    } else if (idade >= 60 && sexo.value == 'm') {
        msg.innerHTML = `idoso de ${idade} anos` 
        img.src = 'imagens/idoso_m.jpg'
    } else if (idade >= 60 && sexo.value == 'f') {
        msg.innerHTML = `idoso de ${idade} anos` 
        img.src = 'imagens/idoso_f.jpg'
    }
}