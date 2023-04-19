let state = "clear";

let screenHandler = (value, operator) => {
    console.log(value, state, operator)
    if (operator === "number"){
        if (state === "clear"){
            document.querySelector(".screen").innerHTML = value;
            state = "inputingNumber";
        }
        else if (state === "inputingNumber"){
            document.querySelector(".screen").innerHTML = `${document.querySelector(".screen").innerHTML + value}` 
        }
    }
    else if (operator === "clear"){
        document.querySelector(".screen").innerHTML = value;
    }

};

document.
    querySelectorAll(".number");
    addEventListener("click", function(event) {
        screenHandler(event.target.innerText, "number");
    }
);

document
    .querySelector(".clear")
    .addEventListener("click", function(event) {
        screenHandler(0, "clear")
    })
