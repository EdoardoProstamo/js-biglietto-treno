// Chiedere i dati all'utente
const userKm = parseFloat (prompt('Totalekm'));
console.log(userKm);
const userAge = prompt('Età');
console.log(userAge);

// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//     - prezzo biglietto = 0,21€ * 1Km 
const priceKm = 0.21;
console.log(priceKm);
const TotalPrice = priceKm * userKm ;
console.log(TotalPrice);



//     - lo sconto iniziale è pari a 0 





// - va applicato uno sconto del 20% per i minorenni
//     - sconto per le persone con età < 18 anni = 20%





// - va applicato uno sconto del 40% per gli over 65
//     - sconto per le persone con età > 65 anni = 40%




    
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
