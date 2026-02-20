// O método .map() no JavaScript cria um novo array aplicando uma função a cada elemento do array original, sem modificá-lo.

// exemplo 1
const numeros = [1, 2, 3, 4, 5];

const dobro = numeros.map(aoQuadrado);
const triplo = numeros.map(aoCubo);
console.log(numeros);
console.log(dobro);
console.log(triplo);


function aoQuadrado(elemento) {
    return Math.pow(elemento, 2);
}

function aoCubo(elemento) {
    return Math.pow(elemento, 3);
}

//exemplo 2
const datas = ['2024-1-10', '2025-2-20', '2020-3-25'];
const novasDatas = datas.map(formatarDatas);

console.log(datas);
console.log(novasDatas);

function formatarDatas(elemento,) {
    const partes = elemento.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}
