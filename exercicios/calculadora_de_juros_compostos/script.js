const valortxt = document.getElementById('valor');
const jurostxt = document.getElementById('juros');
const anostxt = document.getElementById('anos');
const monetario = document.getElementById('monetario')

function calcular() {
    let valor = Number(valortxt.value);
    let juros = Number(jurostxt.value) / 100;
    let anos = Number(anostxt.value);

    if (valor < 0) {
        valor = 0;
    }

    if (juros < 0) {
        juros = 0;
    }

    if (anos < 0) {
        anos = 0;
    }

    const resultado = valor * Math.pow((1 + juros / 1), 1 * anos);

    monetario.textContent = resultado.toLocaleString(undefined, {style: 'currency', currency: 'brl'});
}