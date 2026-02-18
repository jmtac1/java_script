// let idade = 15;
// let mensagem = idade >= 18 ? 'maior de idade' : 'menor de idade';
// console.log(mensagem);

const agora = new Date();
let hora = agora.getHours();

let mensagem = hora < 11 ? 'bom dia' : 'boa tarde ou boa noite'
console.log(mensagem)