import formValidChecker from "./modules/formValidChecker"
import openPopup from "./modules/openPopup"
const emailInput = document.querySelector(".help__email-input");
const problemTextarea = document.querySelector(".help__problem-textarea");
const submitBtn = document.querySelector(".help__submit-btn")


formValidChecker(emailInput);
formValidChecker(problemTextarea);

submitBtn.addEventListener("click", (e) => {
    if(emailInput.value == ""){
        e.preventDefault()
        emailInput.classList.add("invalid__input");
    }else if(problemTextarea.value == ""){
        e.preventDefault()
        problemTextarea.classList.add("invalid__input");
    }else{
        e.preventDefault()
        openPopup()
    }
})
