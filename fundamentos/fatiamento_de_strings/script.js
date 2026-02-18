const nomeCompleto = 'João Manoel';
// let primeiroNome = nomeCompleto.slice(0, 4);
// let ultimoNome = nomeCompleto.slice(5, 11);
let primeiroNome = nomeCompleto.slice(0, nomeCompleto.indexOf(' '));
let ultimoNome = nomeCompleto.slice(nomeCompleto.indexOf(' ') + 1);
console.log(primeiroNome);
console.log(ultimoNome);