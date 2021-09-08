const nextBtn = document.querySelector(".create-fighting__next-btn");
const textarea = document.querySelector("textarea");
const betPriceInput = document.querySelector(".create-fighting__bet-input");
const inputs = Array.from(document.querySelectorAll("input"));
inputs.push(textarea);



import ValidNumChecker from "./modules/ValidNumChecker"
import formValidChecker from "./modules/formValidChecker";





inputs.forEach(input => {
    formValidChecker(input);
});

ValidNumChecker(betPriceInput, 500)


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
