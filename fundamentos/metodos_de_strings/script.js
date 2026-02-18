let nome = 'João';

nome.charAt(1); // retorna o character no índice indicado
nome.indexOf('o'); // retorna o índice da primeira aparição da string indicada
nome.lastIndexOf('o'); // retorna a ultima aparição da string indicada
nome.length; // retorna o número de characteres da string indicada
nome.trim(); // retira os espaços vazios antes e depois da string
nome.toUpperCase(); // deixa a string em maiúsculo
nome.toLowerCase(); // deixa a string em minúsculo
nome.repeat(3); // vai repetir a string pelo número de vezes indicada
nome.startsWith('J'); // verifica se a string começa com o character indicado
nome.endsWith('0'); // verifica se a string termina com o character indicado
nome.includes('ã'); // verifica se a string contém o character indicado
let numero = '123-456-7890';

numero.replaceAll('-', '*'); // substitui todos os characteres indicados pelo outro character indicado
numero.padStart(20, '*'); // primeiro voce indica um tamanho maior para a string e indica o character que ela vai começar
numero.padEnd(20, '*'); // a mesma coisa do anterior só que vai determinar com qual character a string vai terminar
