
/*
TRACK:
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

/*
pseud-code:
-creazione lista email
-selezionare email da un input
    con uso di un bottone
-apro ciclo di verifica:
    -SE l'email è presente
        Verificata
    -SE l'ipotesi precende è vera
        stampare email: found output
    ALTRIMENTI
        stampare email: not-found output
*/

// creazione lista:
const emailsAccepted = ["asd@ciao.it", "abcde@ciao.it", "possoentrare@perfavore.it"]

// selezione di elementi email e submit:
let userEmailEl = document.getElementById("userEmail");
let submitEl = document.getElementById("submit");

submitEl.addEventListener("click", function() {
    // aggiungo variabile sentinella
    let isEmailAcceptable = false;
    // creazione ciclo di verifica email
    for (let i = 0; i < emailsAccepted.length; i++) {
        if(userEmailEl.value == emailsAccepted[i]) {
            isEmailAcceptable = true;
        }
    }
    // se è stata verifica la presenza e la varibaile è vera:
    if(isEmailAcceptable == true) {
        console.log("true")
    } else {
        console.log("false")
    }
;})