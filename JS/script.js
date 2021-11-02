
let counterW = document.getElementById("counter");
let counter = counterW.innerHTML = 0;

 /* Reset button settings*/
let resetW = document.getElementById("reset");
resetW.classList.add("reset");
let resetButton = document.createElement("button");
resetButton.classList.add("reset-wrap");
resetButton.innerHTML = "RESET";
resetW.appendChild(resetButton);

/* Reset button event */
resetButton.addEventListener("click",  (e) =>{
    counterW.innerHTML = 0;
    colorCounter();
})

/* Plus and minus buttons settings */
let buttonsW = document.getElementById("buttons");
let plusButton = document.createElement("button");
let minusButton = document.createElement("button");
plusButton.classList.add("plus-button");
minusButton.classList.add("minus-button");
buttonsW.appendChild(plusButton);
buttonsW.appendChild(minusButton);
plusButton.innerHTML = "+";
minusButton.innerHTML = "-";

/* Plus and minus buttons event */
plusButton.addEventListener("click", (e) => {
    counterW.innerHTML ++;
    colorCounter();
    }
    
)
minusButton.addEventListener("click", (e) => {
    counterW.innerHTML --;
    colorCounter();
    
})
/* Color settings for counter */
function colorCounter() {
    if (counterW.innerHTML > 0) {
        counterW.style.color = "green"
    } else if (counterW.innerHTML < 0) {
        counterW.style.color = "red";
    } else if (counterW.innerHTML == 0){
        counterW.style.color = "black";
    }
}

