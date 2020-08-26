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
// for (var i = 0; i <libreria.length; i++){
//   console.log(i);
//   for (var k in libreria[i]){
//     console.log(k + ': ' + libreria[i][k]);
//   }
// }

//stampiamo tutti i titoli dei libri
// for (var i = 0; i <libreria.length; i++){
//   console.log(libreria[i].titolo);
// }
