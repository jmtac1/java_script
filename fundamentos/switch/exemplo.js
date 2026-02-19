let nota = 4;
let condição;

switch(true) {
    case nota >= 7:
        condição = 'aprovado';
        break;
    case nota >= 5:
        condição = 'recuperação'
        break;
    case nota < 5:
        condição = 'reprovado'
        break;
}
console.log(condição)