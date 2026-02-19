// method chaining é chamar um método após o outro em uma só linha de código

let nome = '   jOaO   ';

// sem method chaining:

// nome = nome.trim();
// let letra = nome.charAt(0);
// letra = letra.toUpperCase();
// let resto = nome.slice(1);
// resto = resto.toLowerCase();
// nome = letra + resto;
// console.log(nome)

// com method chainig:

nome = nome.trim().charAt(0).toUpperCase() + nome.trim().slice(1).toLowerCase();
console.log(nome)