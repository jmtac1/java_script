// Cookies em JavaScript são pequenos arquivos de texto armazenados no navegador do usuário, manipulados através da propriedade document.cookie. Eles permitem armazenar pares chave-valor para persistir dados entre sessões, como preferências do usuário ou autenticação. Criar cookies envolve definir nome=valor, data de validade (expires ou max-age) e o caminho (path).

const nome = document.getElementById('texto1');
const sobrenome = document.getElementById('texto2');
const enviar = document.getElementById('botaoEnviar');
const cookie = document.getElementById('botaoCookie');

enviar.addEventListener('click', () => {
    setCookie('nome', nome.value, 7);
    setCookie('sobrenome', sobrenome.value, 7);
});

cookie.addEventListener('click', () => {
    nome.value = getCookie('nome');
    sobrenome.value = getCookie('sobrenome');
});

function setCookie(chave, valor, validade) {
    const dia = new Date();
    dia.setTime(dia.getTime() + (validade * 24 * 60 * 60 * 1000));
    let expira = "expires=" + dia.toUTCString();
    document.cookie = `${chave}=${valor}; ${expira}; path=/`
}

function apagarCookie(chave, nome) {
    setCookie(chave, nome, null);
}

function getCookie(chave) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split('; ');
    let resultado = null;
    
    cArray.forEach(elemento => {
        if (elemento.indexOf(chave) == 0) {
            resultado = elemento.substring(chave.length + 1);
        }
    });

    return resultado
}

console.log(document.cookie)