import formValidChecker from "./modules/formValidChecker"
import openPopup from "./modules/openPopup"


const allInputs = document.querySelectorAll("input");
const saveBtn = document.querySelector(".change-password__save-btn")
const oldPasswordInput = document.querySelector(".change-password__old-password");
const newPasswordInput = document.querySelector(".change-password__new-password");
const repeatedPasswordInput = document.querySelector(".change-password__repeat-password");


allInputs.forEach(input => {
    formValidChecker(input)
});

saveBtn.addEventListener("click", (e) => {
    let inputValueCheker = 0;
    allInputs.forEach(input => {
        if(input.value == ""){
            input.classList.add("invalid__input");
            inputValueCheker++
        }
    });
    if(inputValueCheker > 0){
        e.preventDefault();
    }else if (oldPasswordInput.value === newPasswordInput.value){
        e.preventDefault();

        oldPasswordInput.classList.remove("valid__input");
        newPasswordInput.classList.remove("valid__input")

        oldPasswordInput.classList.add("invalid__input");
        newPasswordInput.classList.add("invalid__input")
    }else if (newPasswordInput.value !== repeatedPasswordInput.value){
        e.preventDefault();
        newPasswordInput.classList.remove("valid__input");
        repeatedPasswordInput.classList.remove("valid__input")
        newPasswordInput.classList.add("invalid__input");
        repeatedPasswordInput.classList.add("invalid__input")
    }else{
        e.preventDefault();
        openPopup()
    }
})
