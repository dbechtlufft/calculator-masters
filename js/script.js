const mathOperators = ["addition", "subtraction", "division", "multiplication"]
const screen = document.querySelector(".screen");

let state = "clear";
let firstNumber = null;
let operation = null;

let screenHandler = (value, operator) => {
    console.log(value, state, operator)
    if (operator === "number"){
        if (state === "clear"){
            screen.innerHTML = value;
            state = "inputingNumber";
        }
        else if (state === "inputingNumber"){
           screen.innerHTML = `${screen.innerHTML + value}` 
        }
    }
    else if (operator === "clear"){
        screen.innerHTML = value;
        globalVariablesHandler("clear", null, null);
    }
    else if (operator === "backspace"){
        screen.innerHTML = screen.innerText.slice(0, -1);
    }
    else if (mathOperators.includes(operator)){
        if (firstNumber === null){
            firstNumber = screen.innerText;
            operation = operator;
            screen.innerHTML = value;
        }
        else {
            screen.innerHTML = calculator(firstNumber, screen.innerText, operation)
            globalVariablesHandler("clear", screen.innerText, operator);
        }
    }
    else if (operator === "equals"){
        screen.innerHTML = calculator(firstNumber, screen.innerText, operation);
        globalVariablesHandler("clear", null, null);
    }
};

let calculator = (firstNumber, secondNumber, operation) => {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber)

    if (operation === "addition"){
        return firstNumber + secondNumber;
    }
    else if (operation === "subtraction"){
        return firstNumber - secondNumber;
    }
    else if (operation === "multiplication"){
        return firstNumber * secondNumber;
    }
    else if (operation === "division"){
        return firstNumber / secondNumber;
    }
}

let globalVariablesHandler = (locState, locFirstNumber, locOperation) => {
    state = locState;
    firstNumber = locFirstNumber;
    operation = locOperation;
}


document.querySelectorAll(".number").forEach(el => {
    el.addEventListener("click", function(event) {
        screenHandler(event.target.innerText, "number");
    });   
});

document.querySelector(".clear").addEventListener("click", function(event) {
        screenHandler(0, "clear");
});

document.querySelector(".backspace").addEventListener("click", function(event) {
        screenHandler(0, "backspace");
});

document.querySelector(".addition").addEventListener("click", function(event) {
        screenHandler(0, "addition");
});

document.querySelector(".subtraction").addEventListener("click", function(event) {
        screenHandler(0, "subtraction");
});

document.querySelector(".division").addEventListener("click", function(event) {
        screenHandler(0, "division");
});

document.querySelector(".multiplication").addEventListener("click", function(event) {
        screenHandler(0, "multiplication");
});

document.querySelector(".equals").addEventListener("click", function(event) {
    screenHandler(0, "equals");
});

screenHandler(0, "clear");
