function gerarSenha(tamanho, minusculas, maiusculas, numeros, simbolos) {

    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numerosCaracteres = '1234567890';
    const simbolosCaracteres = '!@#$%&*µæß';

    let caracteresPermitidos = '';
    let senha = '';

    caracteresPermitidos += minusculas ? letrasMinusculas : '';
    caracteresPermitidos += maiusculas ? letrasMaiusculas : '';
    caracteresPermitidos += numeros ? numerosCaracteres : '';
    caracteresPermitidos += simbolos ? simbolosCaracteres : '';
    
    if (tamanho <= 0) {
        return 'senha deve no minimo 1 digito';
    }
    if (caracteresPermitidos.length === 0) {
        return 'senha tem que ter pelo menos 1 configuração'
    }

    for (let i = 0; i < tamanho; i++) {
        let aleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
        senha += caracteresPermitidos[aleatorio];
    }

    return senha;
}

const tamanho = 10;
const minusculas = true;
const maiusculas = true;
const numeros = true;
const simbolos = true;

const senha = gerarSenha(tamanho, minusculas, maiusculas, numeros, simbolos);

console.log(senha);