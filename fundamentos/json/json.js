// JSON (JavaScript Object Notation) é um formato leve de intercâmbio de dados, baseado em texto, que utiliza a sintaxe de objetos JavaScript, mas é independente de linguagem. É amplamente utilizado para transmitir dados entre um servidor e uma aplicação web. 

const nomesJson = `["joao", "maria", "carlos", "ana"]`;
const pessoaJson = `{"nome": "joao","idade": 20,"eEleitor": true,"coresFavoritas": ["azul", "vermelho", "cinza"]}`;
const pessoasJson = `[{"nome": "joao","idade": 20,"eEleitor": true},
                      {"nome": "maria","idade": 25,"eEleitor": true},
                      {"nome": "carlos","idade": 21,"eEleitor": true},
                      {"nome": "ana","idade": 17,"eEleitor": false}]`;


// .stringfy() = converte um objeto JS para uma string JSON
// const nomesJson = JSON.stringify(nomes);
// const pessoaJson = JSON.stringify(pessoa);
// const pessoasJson = JSON.stringify(pessoas);
// console.log(pessoasJson);

// .parse() = converte uma string JSON para um objeto JS
// const parse = JSON.parse(pessoasJson);
// console.log(parse);

fetch("pessoas.json")
    .then(resposta => resposta.json())
    .then(valores => valores.forEach(valor => console.log(valor.nome)));