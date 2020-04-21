// chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
// calcolare il prezzo totale del viaggio
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65

var eta_passeggero = Math.floor(Math.random() * 100);
    console.log( 'il passeggero ha' + eta_passeggero + 'anni' );

var km_percorrere = Math.floor(Math.random() * 1000);
    console.log( 'il passeggero deve percorrere: ' + km_percorrere + ' km');

// prezzo biglietto
var prezzo_biglietto = ( ( km_percorrere ) *0.21 );
    console.log( 'il prezzo del biglieto del passeggero è di €:' + prezzo_biglietto );

// prezzo biglietto under 18
var sconto_giovani = ( prezzo_biglietto - ( prezzo_biglietto ) *0.2 );
    if ( eta_passeggero < 18 ) {
        console.log( 'il prezzo del biglieto del passeggere sarebbe stato di €:' + prezzo_biglietto + '.' + 'Ma con lo sconto è di €:' + sconto_giovani );
}

// prezzo biglietto over 65
var sconto_anziani = ( prezzo_biglietto - ( prezzo_biglietto ) *0.4 );
    if ( eta_passeggero > 65 ) {
        console.log( 'il prezzo del biglieto del passeggere sarebbe stato di €:' + prezzo_biglietto + '.' + 'Ma con lo sconto è di €:' + sconto_anziani );
}
