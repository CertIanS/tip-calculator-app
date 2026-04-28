let bill = 0.0;
let people = 0;
let tip = 0.0;

document.getElementById("bill").addEventListener("change", calculate);
document.getElementById("people").addEventListener("change", calculate);

function calculate(){
    bill = document.getElementById("bill").value;
    people = document.getElementById("people").value;

    if(people > 0){
        document.getElementById("total").textContent = (bill / people).toFixed(2);
    }
}

function calculateTip(id){
    switch(id) {
        case "five":
            tip = bill * 0.05;
            break;
        case "ten":
            tip = bill * 0.1;
            break;
        case "fifteen":
            tip = bill * 0.15;
            break;
        case "twenty":
            tip = bill * 0.2;
            break;
        case "twentyFive":
            tip = bill * 0.25;
    }
    if(people > 0 && bill > 0.0){
        document.getElementById("tip").textContent = (tip / people).toFixed(2);
    }
}