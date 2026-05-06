let bill = 0.0;
let people = 0;
let tip = 0.0;

function calculate(){
    document.getElementById("reset").disabled = false;
    bill = document.getElementById("bill").value;
    people = document.getElementById("people").value;

    if(people > 0 && bill > 0.0){
        updateTipandTotal();
    }else{
        document.getElementById("tip").textContent = "0.00";
        document.getElementById("total").textContent = "0.00";
    }
}

function calculateTip(id){
    document.getElementById("reset").disabled = false;
    document.getElementById("custom").value = "";
    document.getElementById("custom").style.border = "3px solid white";
    switch(id) {
        case "five":
            tip = bill * 0.05;
            document.getElementById("five").disabled = true;
            document.getElementById("ten").disabled = false;
            document.getElementById("fifteen").disabled = false;
            document.getElementById("twentyFive").disabled = false;
            document.getElementById("fifty").disabled = false;
            break;
        case "ten":
            tip = bill * 0.1;
            document.getElementById("five").disabled = false;
            document.getElementById("ten").disabled = true;
            document.getElementById("fifteen").disabled = false;
            document.getElementById("twentyFive").disabled = false;
            document.getElementById("fifty").disabled = false;
            break;
        case "fifteen":
            tip = bill * 0.15;
            document.getElementById("five").disabled = false;
            document.getElementById("ten").disabled = false;
            document.getElementById("fifteen").disabled = true;
            document.getElementById("twentyFive").disabled = false;
            document.getElementById("fifty").disabled = false;
            break;
        case "twentyFive":
            tip = bill * 0.25;
            document.getElementById("five").disabled = false;
            document.getElementById("ten").disabled = false;
            document.getElementById("fifteen").disabled = false;
            document.getElementById("twentyFive").disabled = true;
            document.getElementById("fifty").disabled = false;
            break;
        case "fifty":
            tip = bill * 0.5;
            document.getElementById("five").disabled = false;
            document.getElementById("ten").disabled = false;
            document.getElementById("fifteen").disabled = false;
            document.getElementById("twentyFive").disabled = false;
            document.getElementById("fifty").disabled = true;
    }
    if(people > 0 && bill > 0.0){
        updateTipandTotal();
    }else{
        document.getElementById("tip").textContent = "0.00";
    }
}

function validateInput(id){
    if (id === "bill" && document.getElementById(id).value < 0.01){
        document.getElementById("billError").textContent = "Can't be zero";
        document.getElementById(id).style.border = "3px solid orange";
    }else if(id === "people" && document.getElementById(id).value < 1){
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
    document.getElementById("reset").disabled = false;
    if(!isNaN(document.getElementById("custom").value) && document.getElementById("custom").value > 0){
        if(bill > 0) tip = bill * (document.getElementById("custom").value / 100.00);
        if(people > 0){
            updateTipandTotal();
        }
        document.getElementById("five").disabled = false;
        document.getElementById("ten").disabled = false;
        document.getElementById("fifteen").disabled = false;
        document.getElementById("twentyFive").disabled = false;
        document.getElementById("fifty").disabled = false;
        document.getElementById("custom").style.border = "3px solid lightgreen";
    }else if(document.getElementById("custom").value === ""){
        tip = 0.0;
        document.getElementById("custom").style.border = "3px solid white";
        document.getElementById("tip").textContent = "0.00";
        if(bill === 0.0 && people === 0) document.getElementById("reset").disabled = true;
    }else{
        document.getElementById("custom").style.border = "3px solid orange";
        document.getElementById("tip").textContent = "0.00";
    }
}

function updateTipandTotal(){
    document.getElementById("tip").textContent = (tip / people).toFixed(2);
    document.getElementById("total").textContent = ((bill / people) + (tip / people)).toFixed(2);
}

function reset(){
    document.getElementById("reset").disabled = true;
    document.getElementById("five").disabled = false;
    document.getElementById("ten").disabled = false;
    document.getElementById("fifteen").disabled = false;
    document.getElementById("twentyFive").disabled = false;
    document.getElementById("fifty").disabled = false;
    document.getElementById("bill").style.border = "3px solid white";
    document.getElementById("people").style.border = "3px solid white";
    document.getElementById("custom").style.border = "3px solid white";
    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    document.getElementById("custom").value = "";
    document.getElementById("total").textContent = "0.00";
    document.getElementById("tip").textContent = "0.00";
    bill = tip = 0.0;
    people = 0;
}