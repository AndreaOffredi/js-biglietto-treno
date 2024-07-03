// Dichiariazione Variabili
let etaUtente
let kmUtente
let costoChilometro = 0.21
let prezzoTotale
let prezzoSconto

// Assegnazione e Prompt per la Richiesta Input dell'Utente
kmUtente = prompt('Inserisci il numero di KM') //string | null
kmUtente = parseInt(kmUtente) //number
console.log(kmUtente)

etaUtente = prompt('Inserisci la tua età') //string | null
etaUtente = parseInt(etaUtente) //number
console.log(etaUtente)

// 1) Calcolo del Prezzo del Biglietto
let prezzoBiglietto = kmUtente * costoChilometro
console.log(prezzoBiglietto) //number

// 2) Calcolo dello Sconto del biglietto e del Prezzo Totale
if (etaUtente <= 17){
    // -- SE valore età minimo di 18 applica -20%
    prezzoSconto = prezzoBiglietto * 0.20
    prezzoTotale = prezzoBiglietto - prezzoSconto
    console.log(prezzoTotale)
} else if (etaUtente >= 65){
    // -- SE valoe età supera è uguale o maggiore a 65 applica -40%
    prezzoSconto = prezzoBiglietto * 0.40
    prezzoTotale = prezzoBiglietto - prezzoSconto
    console.log(prezzoTotale)
} else {
    // -- ALTRIMENNTI non applicare nessuno sconto
    prezzoTotale = prezzoBiglietto
}
// 3) Stampa prezzo in decimali
const prezzoArrotondato = prezzoTotale.toFixed(2) // string
console.log(prezzoArrotondato)