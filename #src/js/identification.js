const loadPersonalDocImgInput = document.querySelector(".identification__person-doc-input");
const loadAdressDocImgInput = document.querySelector(".identification__address-doc-input");
const loadPersonalDocImgBtn = document.querySelector(".identification__person-doc-btn");
const loadAdressDocImgBtn = document.querySelector(".identification__address-doc-btn");


const previewCloseBtn = document.querySelectorAll(".identification__preview-close-btn");
const allInputs = document.querySelectorAll(".input");
const submitBtn = document.querySelector(".identification__submit-btn");
const previewWrappers = document.querySelectorAll(".identification__preview-wrapper");


import formValidChecker from "./modules/formValidChecker.js";




allInputs.forEach(input => {
    formValidChecker(input)
});




function previewloadedImg (input) {
    input.addEventListener("change", function (e) {
        if (this.files[0]) {
          let fr = new FileReader();
      
          fr.addEventListener("load", function () {
            const previewDisplay = e.target.parentElement.nextElementSibling;
            const loadInput = e.target.parentElement;
            previewDisplay.style.backgroundImage = "url(" + fr.result + ")";
            previewDisplay.style.display = "flex"
            loadInput.style.display = "none";

            previewCloseBtn.forEach(btn => {
                btn.addEventListener("click", (evt) =>{
                    evt.target.parentElement.style.display = "none";
                    evt.target.parentElement.previousElementSibling.style.display = "block";

                })
            })
        }, false);
      
          fr.readAsDataURL(this.files[0]);
        }
    });
}




previewloadedImg(loadAdressDocImgInput);
previewloadedImg(loadPersonalDocImgInput);



submitBtn.addEventListener("click", function(e){
    allInputs.forEach(input =>{
        if(input.value == "" || input.classList.contains("invalid__input")){
            e.preventDefault()
            input.classList.add("invalid__input")
            input.addEventListener("focus", function(e){
                e.target.classList.remove("invalid__input")
            });
        }
    })

    if(loadPersonalDocImgBtn.style.display != "none" || loadAdressDocImgBtn.style.display != "none"){
        e.preventDefault();
        loadPersonalDocImgBtn.classList.add("invalid__input");
        loadAdressDocImgBtn.classList.add("invalid__input");
    }

});
