const tempo = document.getElementById('tempo');
let timer = null;
let tempoInicio = 0;
let tempoCorrido = 0;
let estaCorrendo = false;

function começar() {
    if (!estaCorrendo) {
        tempoInicio = Date.now() - tempoCorrido;
        timer = setInterval(atualizar, 10);
        estaCorrendo = true;
    }
}

function parar() {
    if (estaCorrendo) {
        clearInterval(timer);
        tempoCorrido = Date.now() - tempoInicio;
        estaCorrendo = false;
    }
}

function resetar() {
    clearInterval(timer);
    tempoInicio = 0;
    tempoCorrido = 0;
    estaCorrendo = false;
    tempo.textContent = '00:00:00:00';
}

function atualizar() {
    const agora = Date.now();
    tempoCorrido = agora - tempoInicio;

    let horas = Math.floor(tempoCorrido / (1000 * 60 * 60));
    let min = Math.floor(tempoCorrido / (1000 * 60) % 60);
    let sec = Math.floor(tempoCorrido / 1000 % 60);
    let miliSec = Math.floor(tempoCorrido % 1000 / 10);

    horas = String(horas).padStart(2, 0);
    min = String(min).padStart(2, 0);
    sec = String(sec).padStart(2, 0);
    miliSec = String(miliSec).padStart(2, 0);
    
    tempo.textContent = `${horas}:${min}:${sec}:${miliSec}`;

}