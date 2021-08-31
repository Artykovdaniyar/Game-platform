const inputs = document.querySelectorAll(".page__input");
const responseBtn = document.querySelector(".fighting__response-btn");
const popupWindow = document.querySelector(".popup");

import {balance} from "./modules/variables"
import formValidChecker from "./modules/formValidChecker"
import openPopup from "./modules/openPopup"

console.log(balance)

inputs.forEach(input => {
    formValidChecker(input);
});

responseBtn.addEventListener("click", (e) => {
    let validChecker = 0;
    inputs.forEach(input => {
        if(input.value == "" || input.classList.contains("invalid__input")){
            e.preventDefault()
            input.classList.add("invalid__input")
        }else{  
            validChecker++
        }
    });
    if(validChecker > 0){
        openPopup()
    }
})

// responseBtn.addEventListener("click", (e) => {

//     if(input.value == ""){
//         e.preventDefault()
//         input.classList.add("invalid__input")
//     }else if(fightingPrice > balance){
//         e.preventDefault()
//         balanceInfo.style.display = "flex"
//     }else{
//         e.preventDefault()
//         openPopup(popupWindow, "Отклик на сражение успешно отправлен")
//     }
// })