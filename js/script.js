// alert("Hello!");
// var nome = "Mario";
// console.log("nome");

// il tuo nome
var nomeUtente = prompt("Qual è il tuo nome?");
console.log(nomeUtente);
// nome = nomeUtente;
// iltuo cognome
var cognomeUtente = prompt("Qual è il tuo cognome?")
console.log(cognomeUtente);
// il tuo colore preferito
var colorePreferito = prompt("Qual è il tuo colore preferito?");
console.log(colorePreferito);
document.getElementById('nome-utente').innerHTML = nomeUtente;
document.getElementById('cognome-utente').innerHTML = cognomeUtente;
document.getElementById('colore-preferito').innerHTML = colorePreferito;
document.getElementById('anno').innerHTML = "19";
