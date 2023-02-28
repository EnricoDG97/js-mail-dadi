
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

// selezione preventiva del output desiderato
let accessOutputEl = document.getElementById("accessOutput")

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
        accessOutputEl.style.display = "block";
        accessOutputEl.innerText = "Email verificata. Accesso Consentito";
        accessOutputEl.style.color = "#1ed01b"
    } else {
        accessOutputEl.style.display = "block";
        accessOutputEl.innerText = "Email non verificata. Accesso Negato";
        accessOutputEl.style.color = "#d0211b"
    }
;})


/*
SECOND TRACK
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/

/*
pseud-code:
-creazione lista di dadi icone
-genero un numero random per ciuascuno degli sfidanti
-SE il l'indidce di dado dell'user è maggiore rispetto al indice di dado del computer:
    scrivere "win"
ALTRIMENTI 
    scriver "lose"
in entrambi i casi mostrare le icone dei dadi che corrispondo agli indici della lista
*/

// creazione lista dadi
const diceIcons = ["fa-dice-one", "fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-six"];
// creazione variali per selezionare id dei div html
let diceUserElement = document.getElementById("diceUser");
let diceComputerElement = document.getElementById("diceComputer");
let buttonThrowDiceEl = document.getElementById("buttonThrowDice");
let diceThrowOuctputEl = document.getElementById("diceThrowOuctput");


