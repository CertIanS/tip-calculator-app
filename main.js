let bill = 0.0;
let people = 0;
let tip = 0.0;

//document.getElementById("bill").addEventListener("change", validateInput("bill"));
//document.getElementById("people").addEventListener("change", validateInput("people"));

function calculate(){
    document.getElementById("reset").disabled = false;
    bill = document.getElementById("bill").value;
    people = document.getElementById("people").value;

    if(people > 0 && bill > 0.0){
        document.getElementById("total").textContent = (bill / people).toFixed(2);
        document.getElementById("tip").textContent = (tip / people).toFixed(2);
    }else{
        document.getElementById("total").textContent = "0.00";
        document.getElementById("tip").textContent = "0.00";
    }
}

function calculateTip(id){
    //document.getElementById("reset").disabled = false;
    document.getElementById(id).style.backgroundColor = "hsl(172, 67%, 45%)";
    document.getElementById(id).style.color = "hsl(183, 100%, 15%)";
    switch(id) {
        case "five":
            tip = bill * 0.05;
            document.getElementById("ten").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("fifteen").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("twentyFive").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("fifty").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("ten").style.color = "white";
            document.getElementById("fifteen").style.color = "white";
            document.getElementById("twentyFive").style.color = "white";
            document.getElementById("fifty").style.color = "white";
            break;
        case "ten":
            tip = bill * 0.1;
            document.getElementById("five").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("fifteen").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("twentyFive").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("fifty").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("five").style.color = "white";
            document.getElementById("fifteen").style.color = "white";
            document.getElementById("twentyFive").style.color = "white";
            document.getElementById("fifty").style.color = "white";
            break;
        case "fifteen":
            tip = bill * 0.15;
            document.getElementById("five").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("ten").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("twentyFive").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("fifty").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("five").style.color = "white";
            document.getElementById("ten").style.color = "white";
            document.getElementById("twentyFive").style.color = "white";
            document.getElementById("fifty").style.color = "white";
            break;
        case "twentyFive":
            tip = bill * 0.25;
            document.getElementById("five").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("ten").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("fifteen").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("fifty").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("five").style.color = "white";
            document.getElementById("ten").style.color = "white";
            document.getElementById("fifteen").style.color = "white";
            document.getElementById("fifty").style.color = "white";
            break;
        case "fifty":
            tip = bill * 0.5;
            document.getElementById("five").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("ten").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("fifteen").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("twentyFive").style.backgroundColor = "hsl(183, 100%, 15%)";
            document.getElementById("five").style.color = "white";
            document.getElementById("ten").style.color = "white";
            document.getElementById("fifteen").style.color = "white";
            document.getElementById("twentyFive").style.color = "white";
    }
    if(people > 0 && bill > 0.0){
        document.getElementById("tip").textContent = (tip / people).toFixed(2);
    }else{
        document.getElementById("tip").textContent = "0.00";
    }
}

function validateInput(id){
    if (id === "bill" && document.getElementById(id).value < 0.01){
        console.log("error: bill can't be 0");
        document.getElementById("billError").textContent = "Can't be zero";
        document.getElementById(id).style.border = "3px solid orange";
    }else if(id === "people" && document.getElementById(id).value < 1){
        console.log("error: people can't be 0");
        document.getElementById("peopleError").textContent = "Can't be zero";
        document.getElementById(id).style.border = "3px solid orange";
    }else{
        document.getElementById("reset").disabled = false;
        document.getElementById(id + "Error").textContent = "";
        document.getElementById(id).style.border = "3px solid lightgreen";
        calculate();
    }
}

function validateCustomTip(){
    if(!isNaN(document.getElementById("custom").value) && document.getElementById("custom").value > 0){
        tip = bill * (document.getElementById("custom").value / 100.00);
        document.getElementById("tip").textContent = (tip / people).toFixed(2);
        document.getElementById("five").style.backgroundColor = "hsl(183, 100%, 15%)";
        document.getElementById("ten").style.backgroundColor = "hsl(183, 100%, 15%)";
        document.getElementById("fifteen").style.backgroundColor = "hsl(183, 100%, 15%)";
        document.getElementById("twentyFive").style.backgroundColor = "hsl(183, 100%, 15%)";
        document.getElementById("fifty").style.backgroundColor = "hsl(183, 100%, 15%)";
        document.getElementById("five").style.color = "white";
        document.getElementById("ten").style.color = "white";
        document.getElementById("fifteen").style.color = "white";
        document.getElementById("twentyFive").style.color = "white";
        document.getElementById("fifty").style.color = "white";
        document.getElementById("custom").style.border = "3px solid lightgreen";
    }else if(document.getElementById("custom").value === ""){
        document.getElementById("custom").style.border = "3px solid white";
        document.getElementById("tip").textContent = "0.00";
    }
    else{
        document.getElementById("custom").style.border = "3px solid orange";
    }
}

function reset(){
    document.getElementById("reset").disabled = true;
    document.getElementById("five").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("ten").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("fifteen").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("twentyFive").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("fifty").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("five").style.color = "white";
    document.getElementById("ten").style.color = "white";
    document.getElementById("fifteen").style.color = "white";
    document.getElementById("twentyFive").style.color = "white";
    document.getElementById("fifty").style.color = "white";
    document.getElementById("bill").style.border = "3px solid white";
    document.getElementById("people").style.border = "3px solid white";
    document.getElementById("custom").style.border = "3px solid white";
    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    document.getElementById("custom").value = "";
    bill, tip = 0.0;
    people = 0;
    document.getElementById("total").textContent = "0.00";
    document.getElementById("tip").textContent = "0.00";
}