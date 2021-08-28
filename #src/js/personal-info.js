const oldImg = document.querySelector(".personal-info__img");
const selectedImgWrapper = document.querySelector(".personal-info__selected-img");
const selectedImgInput = document.querySelector(".personal-info__select-input");
const form = document.querySelector(".personal-info__form");
const allInputs = form.querySelectorAll("input")
const saveBtn = document.querySelector(".personal-info__btn")

import formValidChecker from "./modules/formValidChecker";
import openPopup from "./modules/openPopup"


allInputs.forEach(input => {
    formValidChecker(input)
})

saveBtn.addEventListener("click", (e) => {
    let inputValueCheker = 0;
    allInputs.forEach(input => {
        if(input.value == ""){
            input.classList.add("invalid__input");
            inputValueCheker++
        }
    });
    if(inputValueCheker > 0){
        e.preventDefault()
    }else{
        openPopup()
    }
})



selectedImgInput.addEventListener("change", function (e) {
    if (this.files[0]) {
        let fr = new FileReader();
    
        fr.addEventListener("load", function () {

        selectedImgWrapper.style.backgroundImage = "url(" + fr.result + ")";
        selectedImgWrapper.style.display = "block"
        oldImg.style.display = "none";

    }, false);
    
        fr.readAsDataURL(this.files[0]);
    }
});


