// O Error object em JavaScript é uma instância que fornece informações sobre erros que ocorrem em tempo de execução. Ele é usado como base para exceções padrão e personalizadas, e é uma parte fundamental do mecanismo try...catch.

// try {
//     console.log('bom dia!');
// } catch (erro) {
//     console.error(erro);
// } finally {
//     console.log('finally block sempre executa');
// }

try {
    const dividendo = Number(window.prompt('dividendo:'));
    const divisor = Number(window.prompt('divisor:'));

    if (divisor == 0) {
        throw new Error('voce não pode dividir por 0');
    }

    if (isNaN(dividendo) || isNaN(divisor)) {
        throw new Error('os valores tem que ser numeros')
    }

    const res = dividendo / divisor;
    console.log(res);
} catch (erro) {
    console.error(erro);
}

console.log('final do programa');