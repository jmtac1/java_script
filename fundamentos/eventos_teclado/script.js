const caixa = document.getElementById('caixa');
const movimento = 10;
let x = 0;
let y = 0;

document.addEventListener('keydown', evento => {
    if (evento.key.startsWith('Arrow')) {
        switch (evento.key) {
            case 'ArrowUp':
                y -= movimento;
                break;
            case 'ArrowDown':
                y += movimento;
                break;
            case 'ArrowLeft':
                x -= movimento;
                break;
            case 'ArrowRight':
                x += movimento;
                break;
        }

        caixa.style.top = `${y}px`;
        caixa.style.left = `${x}px`;
    }
    caixa.textContent = '😂';
    caixa.style.backgroundColor = 'darkblue';
});

document.addEventListener('keyup', evento => {
    caixa.textContent = '😀';
    caixa.style.backgroundColor = 'seagreen';
})