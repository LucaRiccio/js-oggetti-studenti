// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Usate prima i console.log e poi provare a stampare con jQuery:
// BONUS: Provate ad utilizzare Handlebars.

// Creo l'oggetto studente con le proprietà richieste.
var studente = {
  "nome": "Luca",
  "cognome": "Riccio",
  "eta": 32
};

// Ciclo for in per stampare le proprietà dell'oggetto.
for (var key in studente){
  // console.log(studente[key]);
}

// Creazione array di oggetti.
var studenti =
[
  {
    "nome": "Gianni",
    "cognome": "Rossi",
    "eta": 17
  },

  {
    "nome": "Antonio",
    "cognome": "Bianchi",
    "eta": 18
  },

  {
    "nome": "Andrea",
    "cognome": "Grande",
    "eta": 19
  },
];

// Ciclo for per scorrere gli oggetti nell'array
// (gli oggetti sono contenuti in un array, da preferire quindi al for in)
for (var i = 0; i < studenti.length; i++){
  console.log(studenti[i].nome + " " + studenti[i].cognome);// Stampa del nome e del cognome.
}

//leggere gli elementi con un ciclo
// for (var i = 0; i <studenti.length; i++){
//   console.log(i);
//   for (var k in studenti[i]){
//     console.log(k + ': ' + studenti[i][k]);
//   }
// }

// Prompt per inserimento dati da parte dell'utente.
var nome = prompt("Inserisci il nome");
var cognome = prompt("Inserisci il cognome");
var eta = parseInt(prompt("Inserisci l'età"));

// Crezione/push del nuovo oggetto nell'array.
studenti.push({
  nome: nome,
  cognome: cognome,
  eta: eta
});
// console.log(studenti);
