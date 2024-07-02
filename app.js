// Dichiariazione Variabili Input Utente
let etaUtente
let kmUtente
let costoChilometro = 0.21 

// Assegnazione e Prompt per la Richiesta Input dell'Utente
kmUtente = prompt('Inserisci il numero di KM') //string | null
console.log(kmUtente)

etaUtente = prompt('Inserisci la tua età') //string | null
console.log(etaUtente)
// 1) Calcolo del Prezzo del Biglietto
let prezzoBiglietto = kmUtente * costoChilometro
console.log(prezzoBiglietto) //number


// 2) Calcolo dello Sconto del biglietto e del Prezzo Totale
// -- SE valore età minimo di 18 applica -20%
// -- SE valoe età supera è uguale o maggiore a 65 applica -40%
// -- ALTRIMENNTI non applicare nessuno sconto
// 3) Stampa su HTML