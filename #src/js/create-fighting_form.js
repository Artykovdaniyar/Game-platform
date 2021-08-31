const nextBtn = document.querySelector(".create-fighting__next-btn");
const textarea = document.querySelector("textarea");
const betPriceInput = document.querySelector(".create-fighting__bet-input");
const fightingTimeInput = document.querySelector(".create-fighting__time-input");
const fightingDateInput = document.querySelector(".create-fighting__date-input");
const inputs = Array.from(document.querySelectorAll("input"));
inputs.push(textarea);



import ValidNumChecker from "./modules/ValidNumChecker"
import formValidChecker from "./modules/formValidChecker";





inputs.forEach(input => {
    formValidChecker(input);
});

ValidNumChecker(betPriceInput, 500)

fightingTimeInput.addEventListener("input", (e) => {
    if(e.inputType != "deleteContentBackward"){
        if(fightingTimeInput.value.length == 2){
            fightingTimeInput.value = fightingTimeInput.value + ":"
        }
    }

});
fightingDateInput.addEventListener("input", (e) => {
    if(e.inputType != "deleteContentBackward"){
        if(fightingDateInput.value.length == 2 || fightingDateInput.value.length == 5){
            fightingDateInput.value = fightingDateInput.value + "."
        }
    }

});

nextBtn.addEventListener("click", function(e){
    inputs.forEach(input =>{
        if(input.value == "" || input.classList.contains("invalid__input")){
            e.preventDefault()
            input.classList.add("invalid__input")
            input.addEventListener("focus", function(e){
                e.target.classList.remove("invalid__input")

            });
        }
    })

})
