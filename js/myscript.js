
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


// prova collegamento Js 
// alert("Hello! I am an alert box!");

const nome= prompt("metti il tuo nome");

const cognome= prompt("metti il tuo cognome");

const colorePreferito= prompt("metti il tuo colore preferito");

// controllo dati inseriti 
console.log(nome, cognome, colorePreferito)

const nome_1= document.getElementById("nome_1")

nome_1.innerHTML= nome;

const cognome_1= document.getElementById("cognome_1")

cognome_1.innerHTML= cognome;


const colore_1= document.getElementById("colore_1")

colore_1.innerHTML= colorePreferito;



const randomNumber=  (Math.random(1) *11)

const password= document.getElementById("password");

password.innerHTML= nome+cognome+colorePreferito+randomNumber;


