let bill = 0.0;
let people = 0;
let tip = 0.0;

document.getElementById("bill").addEventListener("change", calculate);
document.getElementById("people").addEventListener("change", calculate);

function calculate(){
    document.getElementById("reset").disabled = false;
    bill = document.getElementById("bill").value;
    people = document.getElementById("people").value;

    if(people > 0){
        document.getElementById("total").textContent = (bill / people).toFixed(2);
    }
}

function calculateTip(id){
    document.getElementById("reset").disabled = false;
    document.getElementById(id).style.backgroundColor = "hsl(172, 67%, 45%)";
    document.getElementById(id).style.color = "hsl(183, 100%, 15%)";
    switch(id) {
        case "five":
            tip = bill * 0.05;
            document.getElementById("ten").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("fifteen").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("twenty").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("twentyFive").style.backgroundColor = "hsl(183, 100%, 15%)";
            break;
        case "ten":
            tip = bill * 0.1;
            document.getElementById("five").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("fifteen").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("twenty").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("twentyFive").style.backgroundColor = "hsl(183, 100%, 15%)";
            break;
        case "fifteen":
            tip = bill * 0.15;
            document.getElementById("five").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("ten").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("twenty").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("twentyFive").style.backgroundColor = "hsl(183, 100%, 15%)";
            break;
        case "twenty":
            tip = bill * 0.2;
            document.getElementById("five").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("ten").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("fifteen").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("twentyFive").style.backgroundColor = "hsl(183, 100%, 15%)";
            break;
        case "twentyFive":
            tip = bill * 0.25;
            document.getElementById("five").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("ten").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("fifteen").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("twenty").style.backgroundColor = "hsl(183, 100%, 15%)";
    }
    if(people > 0 && bill > 0.0){
        document.getElementById("tip").textContent = (tip / people).toFixed(2);
    }
}

function reset(){
    document.getElementById("reset").disabled = true;
    document.getElementById("five").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("ten").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("fifteen").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("twenty").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("twentyFive").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("people").value = 0;
    document.getElementById("bill").value = 0.0
    bill, tip = 0.0;
    people = 0;
    document.getElementById("total").textContent = "0.00";
    document.getElementById("tip").textContent = "0.00";
}