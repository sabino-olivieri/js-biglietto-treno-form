# Biglietto Treno

## Testo della consegna
Il programma dovrà chiedere all'utente il *numero di chilometri* che vuole percorrere e l'*età del passeggero*.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
1. il prezzo del biglietto è definito in base ai km (0.21 € al km)
2. 
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.

## SVOLGIMENTO

Inserire event listener al bottone invia AL CLICK SUL BOTTONE:

1. RACCOLTA DATI: km da percorrere e età dagli input 

2. ESECUZIONE LOGICA
    - [x] controllare correttezza dei dati inseriti
    - [x] creare variabile kmPrice in base ai km
    - [x] applicare sconto in base all'età
            - se minorenne 20%
            - se over 65 40%

3. OUTPUT
    - [ ] stampa del biglietto
