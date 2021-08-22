const loadPersonalDocImgInput = document.querySelector(".identification__person-doc-input");
const loadAdressDocImgInput = document.querySelector(".identification__address-doc-input");
const previewCloseBtn = document.querySelectorAll(".identification__preview-close-btn");




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



