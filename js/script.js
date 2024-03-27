//prelevo elemento del button send
const sendBtn = document.getElementById("send");
console.log(sendBtn);

const containerElm = document.querySelector(".container");
console.log(containerElm);

//aggiungo evento in ascolto al click
sendBtn.addEventListener("click", function () {
    //prelevo valore dall'input dell'username
    const userName = document.getElementById("username").value; // string | null
    console.log("Username:", userName);

    //prelevo valore dall'input dei km da percorrere
    let kmUser = document.getElementById("user-km").value.replace(/,/g, "."); // string | null
    console.log("KmUser:", kmUser);

    //prelevo valore dall'input dell'età
    let ageUser = document.getElementById("user-age").value; // string | null
    console.log("Età:", ageUser);

    // converto i km in number
    kmUser = parseFloat(kmUser); // number
    console.log("km in number:", kmUser);

    //controllo correttezza dei dati
    if (!isNaN(kmUser) && ageUser != "xx" && userName.length > 1 && kmUser > 0) {
        
        console.log("dati corretti");
        containerElm.classList.remove("bg-yellow", "bg-red");
        containerElm.classList.add("bg-green");

        // creo variabile kmPrice in base ai km
        const kmPrice = kmUser * 0.21; // number
        console.log("Prezzo al km:", kmPrice);

        // creo variabile per lo sconto applicato
        let discountApplied = 0;

        // creo variabile per lo sconto in euro
        let discount;

        //creo variabile nome offerta
        let offerName = "Offerta Standard";

        if (ageUser === "minorenne") {
            discountApplied = 20;
            offerName = "Offerta Minorenni";
        } else if (ageUser > "over65") {
            discountApplied = 40;
            offerName = "Offerta Over65";
        }

        console.log("Sconto applicato:", discountApplied);

        discount = kmPrice * discountApplied / 100;
        console.log("Sconto in euro:", discount);

        // creo variabile con il prezzo scontato
        let totPrice = kmPrice - discount; // number
        console.log("Prezzo scontato", totPrice);

        //creo variabile per numero carrozza
        const carriage = Math.floor((Math.random() * 12) + 1);

        //creo variabile per codice biglietto
        const cpCode = Math.floor((Math.random() * 99999) + 1);


        document.getElementById("ticket").innerHTML = `
        <h2 style="text-align: center;">Il tuo biglietto</h2>
        <div class="bg-white padding margin-top flex">
            <div class="col-ticket-small padding">
                <h4>Nome Passeggero:</h4>
                <h4 class="margin-top">${userName}</h4>
                
            </div>


                <div class="flex col-ticket-large padding">
                    <div class="col25 fw-bold">Offerta</div>
                    <div class="col25 fw-bold">Carrozza</div>
                    <div class="col25 fw-bold">Codice CP</div>
                    <div class="col25 fw-bold">Costo biglietto</div>
                    <div class="col25 margin-ticket">${offerName}</div>
                    <div class="col25 margin-ticket">${carriage}</div>
                    <div class="col25 margin-ticket">
                        ${cpCode} <br>
                        <span class="barcode">${cpCode}</span>
                    </div>
                    <div class="col25 margin-ticket">€ ${totPrice.toFixed(2)}</div>
                </div>


        </div>
        `
    }

    else { 
        alert("Dati inseriti errati");
        containerElm.classList.remove("bg-yellow" , "bg-green");
        containerElm.classList.add("bg-red");
     }



})