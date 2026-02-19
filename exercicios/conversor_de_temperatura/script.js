const celFar = document.getElementById('celFar');
const farCel = document.getElementById('farCel');
const botaoEnviar = document.getElementById('botaoEnviar');
let res = document.getElementById('res')

function far(n) {
    let r = (n * 1.8) + 32;
    return r;
}
function cel(n) {
    let r = ((n - 32) * 5) / 9;
    return r;
}

botaoEnviar.onclick = function () {
    let num = document.getElementById('num');
    let numero = Number(num.value);
    
    if (celFar.checked) {
        let valor = far(numero);
        res.textContent = `${valor}°F`
    } else if (farCel.checked) {
        let valor = cel(numero)
        res.textContent = `${valor}°C`
    } else {
        res.textContent = 'marque uma opção'
    }
}