/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*let a = 4, b =8;
if (a > b) {
    console.log("il maggiore è: " + a);
} else {
    console.log("il maggiore è: " + b);
}*/


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.*/

/*let c = 7;
if (c !== 5) {
    console.log("not equal");
} else {
    console.log("equal");
}*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*let d = 20;
if (d % 5 === 0) {
    console.log("divisible by 5");
} else {
    console.log("not divisible by 5");
}*/


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*let e = 6, f = 7;
if (f === 8 || e === 8 || f + e === 8 || f - e === 8 || e - f === 8)  {
  console.log("una delle opzioni è vera - f ha valore 8")
} else {
  console.log("nessuna delle opzioni è vera ")
}*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*let totalShoppingCart = 50;
let overCharge = 10;
let checkOut;
if (totalShoppingCart <= 50) {
  checkOut = totalShoppingCart + overCharge; 
} else {
  checkOut = totalShoppingCart;
}
console.log("Totale da pagare " + checkOut);
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/*let totalShoppingCart = 50;
let overCharge = 10;
let checkOut;
let discount = 0.8;
if (totalShoppingCart <= 50) {
  checkOut = (totalShoppingCart * discount) + overCharge; 
} else {
  checkOut = totalShoppingCart * discount;
}
console.log("Totale da pagare " + checkOut);
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*let g = 1, h = 2, i = 3;
let min, med, max;
if (g > h && g > i) {
  max = g; 
    if (h > i) {
    med = h;
    min = i;
  } 
  else {
    med = i;
    min = h;
  }
}
else if (h > g && h > i) {
  max = h;
    if (g > i) {
      med = g;
      min = i;
    }
    else {
      med = i;
      min = g;
    }
}
else {
  max = i;
  if (g > h) {
    med = g;
    min = h;
  }
  else {
    med = h;
    min = g;
  }
}
console.log(max, med, min)*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/*let l = 8, l2 = 8.5, l3 = "stringa";

  console.log (typeof l + " il numero è un intero");
  console.log (typeof l3 + " il numero non è intero");
  console.log (Number.isInteger(l2));
*/


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*let m = 16;
if ( m % 2 === 0 ){
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/*let val = 9
  if (val < 10 && val > 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/*let num = 4;
if (num < 5){
  console.log("Tiny");
} else if (num > 5 && num <10){
  console.log("Small");
} else if (num >10 && num < 15){
  console.log("Medium");
} else if (num > 15 && num < 20){
  console.log("Large");
} else if(num >= 20){
  console.log("Huge");
}
*/

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/*let gender = "isMale" ? "male":"female"
console.log(gender)*/

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/*let num = 0;
  while (num <= 5){
    console.log(num);
    num++;
  }
  */

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/
/*let num1 = 0;
 for(num1 = 0; num1 <= 10; num1 ++){
  console.log(num1)
 }
*/

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/
/*let num1 = 0;
 for(num1 = 0; num1 <= 10; num1 ++){
  if (num1 != 3 && num1 != 8){
  console.log(num1)
  }
 }
*/

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/*let num1 = 0;
 for(num1 = 0; num1 <= 15; num1 ++){
  if (num1 % 2 === 0){
    console.log(num1 + " pari");
  } else {
    console.log(num1 + " dispari");
 }
}
*/

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" 
  e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
/*
let num = 1;
for(num = 1; num <= 100; num ++){
  if (num % 3 === 0 && num % 5 === 0){
    console.log(" FizzBuzz");

    }else if (num % 3 === 0){
      console.log(" Fizz");
    } else if (num % 5 === 0){
      console.log(" Buzz");
    } else {
      console.log(num);
  }
}
*/
/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* let day = 1
switch (day) {
 case 1:
  console.log("Lunedì");
  break; 
 case 2:
  console.log("Martedì");
  break; 
  case 3:
  console.log("Mercoledì");
  break; 
  case 4:
  console.log("Giovedì");
  break; 
  case 5:
  console.log("Venerdì");
  break; 
  case 6:
  console.log("Sabato");
  break; 
  case 7:
  console.log("Domenica");
  break; 
default:
  console.log("sei andato oltre");

}
  */
  
  
  
 
