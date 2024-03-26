//prelevo elemento del button send
const sendBtn = document.getElementById("send");
console.log(sendBtn);

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

    // converto l'età in number
    ageUser = parseInt(ageUser); // number
    console.log("Età in number:", ageUser);

    //controllo correttezza dei dati
    if (!isNaN(kmUser) && !isNaN(ageUser) && userName.length > 1 && kmUser > 0 && ageUser >= 0) {
        
        console.log("dati corretti");

        // creo variabile kmPrice in base ai km
        const kmPrice = kmUser * 0.21; // number
        console.log("Prezzo al km:", kmPrice);

        // creo variabile per lo sconto applicato
        let discountApplied = 0;

        // creo variabile per lo sconto in euro
        let discount;

        if (ageUser < 18) {
            discountApplied = 20;
        } else if (ageUser > 65) {
            discountApplied = 40;
        }

        console.log("Sconto applicato:", discountApplied);

        discount = kmPrice * discountApplied / 100;
        console.log("Sconto in euro:", discount);

        // creo variabile con il prezzo scontato
        let totPrice = kmPrice - discount; // number
        console.log("Prezzo scontato", totPrice);
    }

    else { 
        alert("Dati inseriti errati");
     }



})