// 1. document.getElementById()         // ELEMENT OR NULL
// 2. document.getElementsClassName()   // HTML COLLECTION
// 3. document.getElementsByTagName()   // HTML COLLECTION
// 4. document.querySelector()          // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()       // NODELIST


// document.getElementsClassName()
const frutas = document.getElementsByClassName('fruta');

frutas[0].style.color = 'red';
frutas[1].style.color = 'purple';
frutas[2].style.color = 'orange';

// for (let fruta of frutas) {
//     fruta.style.backgroundColor = 'black';
// }

Array.from(frutas).forEach(fruta => fruta.style.backgroundColor = 'grey');

// document.getElementsByTagName()
const h1 = document.getElementsByTagName('h1');
const li = document.getElementsByTagName('li');

h1[0].style.color = 'green';
h1[1].style.color = 'red';

Array.from(h1).forEach(h1 => h1.style.backgroundColor = 'lightblue');
Array.from(li).forEach(li => li.style.backgroundColor = 'lightgreen');

// document.querySelectorAll()
const p = document.querySelectorAll('.fruta');

p.forEach(fruta => fruta.style.fontSize = '2em');