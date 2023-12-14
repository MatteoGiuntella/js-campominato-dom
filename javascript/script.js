// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// 1- creo un bottone che all'evento click farà apparire la tavola di gioco

// 2- la tavola di gioco sarà composta da 10 caselle su 10 righe

// 3- quando l'utente clicca sulla cella cambia colore e stampa il numero in console

let start = true;
// creata una flag che mi servirà da interrutore per attivare e disattivafre le condizione nel mio ciclo

let punteggio = 0;

let newGame = document.getElementById('newgame');
newGame .addEventListener('click', function(){
// creo evento click assegnando come valore alla variabile newgame il bottone su html
    let difficult = document.getElementById('select').value;
    console.log('difficult',difficult, typeof difficult)
    let option = 49;
    let classe = 'easy';

    // le due variabili qui sopra indicano rispettivamente le classi del css creata per variare il numero di celle in base alla difficoltà

    if ( difficult == 'hard'){
        option = 100
        classe = 'hard';
    }

    else if ( difficult == 'normal'){
        option = 81
        classe = 'normal';
    }
    let bomb = [];

    for (let i = 0; i < 16; i++) {
        let randomBomb = numberCell(1, option)

        let selectorBomb = bomb.includes(randomBomb);
    while (selectorBomb == true) {
        randomBomb = numberCell(1, option);
        selectorBomb = bomb.includes(randomBomb);
    }
    bomb.push(randomBomb);
    console.log(randomBomb)
    }

        for (let i = 1; i <= option; i++) {

            let cell = document.createElement('div');
            cell.append(i);
            cell.classList.add('cell', classe)
            document.getElementById("my-container-cell").append(cell); 
            // creo un elemnto div e ci appendo le classi creata nel css che si vedranno solo ed esculisavamte con l'elemnto click
            cell.addEventListener('click', function(){

                if(start === false) {
                    alert('gioco stoppato, punteggio = ' + punteggio);
                    return;
                }
                if(bomb.includes(parseInt(this.innerHTML))){
                    start = false;
                    this.classList.add('cell-bomb')
                } 
                else{
                    this.classList.add('cell-active')
                    punteggio++;
                    console.log('punteggio ', punteggio)
                    console.log('option ', option)
                    if (punteggio == (option - 16)){         
                        console.log('hai vinto');           
                    
                        document.getElementById('result').innerHTML = punteggio
                    }
                }               
                // aggiungo eventoi click sulle celle create in precedenza e assegno una nuova classe che mi farà cambiare colore al momento del click su di esse
            })  
        }
    // con questo ramo della condizione faccio in modo che se viene ricliccato il bottone non aggiungerà alte celle ma resetterà la pagina allo stato iniziale  
})






function numberCell(min, max){
    return Math.floor(Math.random() * (max - min + 1) + 1);
}


// esercizio 2
























