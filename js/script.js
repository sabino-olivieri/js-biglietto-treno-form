//prelevo elemento del button send
const sendBtn = document.getElementById("send");
console.log(sendBtn);

//aggiungo evento in ascolto al click
sendBtn.addEventListener("click", function () {
    //prelevo valore dall'input dell'username
    const userName = document.getElementById("username").value; // string | null
    console.log("Username:", userName);

    //prelevo valore dall'input dell'username
    let kmUser = document.getElementById("user-km").value.replace(/,/g, "."); // string | null
    console.log("KmUser:", kmUser);

    //prelevo valore dall'input dell'età
    let ageUser = document.getElementById("user-age").value; // string | null
    console.log("Età:", ageUser, typeof ageUser);
})
