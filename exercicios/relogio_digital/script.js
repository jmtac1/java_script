function atualizarRelogio() {
    const agora = new Date();
    const hora = agora.getHours().toString().padStart(2, 0);
    const minutos = agora.getMinutes().toString().padStart(2, 0);
    const segundos = agora.getSeconds().toString().padStart(2, 0);

    const tempoString = `${hora}:${minutos}:${segundos}`;
    document.getElementById('hora').textContent = tempoString;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);