import openPopup from "./modules/openPopup.js";
const exitBtn = document.querySelector(".setting__exit-btn");
const cancelBtn = document.querySelector(".popup__cancel-btn");
const popupWindow = document.querySelector(".popup");
const popupWrapper = document.querySelector(".popup__wrapper");

exitBtn.addEventListener("click", () => {
    openPopup()
})
cancelBtn.addEventListener("click", () => {
    popupWindow.classList.remove("animate__bounceInDown");
    popupWindow.classList.add("animate__fadeOut"); 

    popupWrapper.classList.remove("animate__fadeIn"); 
    popupWrapper.classList.add("animate__fadeOut"); 

    setTimeout(() =>{
        popupWindow.style.display = "none";
        popupWrapper.style.display = "none";
    }, 1000)

})

