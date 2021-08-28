const openPopup = () => {
    const popupWindow = document.querySelector(".popup");
    const popupWrapper = document.querySelector(".popup__wrapper");
    
    popupWrapper.style.display = "block";
    popupWrapper.classList.remove("animate__fadeOut"); 
    popupWrapper.classList.add("animate__fadeIn"); 
    
    popupWindow.style.display = "flex";

    popupWindow.classList.remove("animate__fadeOut"); 
    popupWindow.classList.add("animate__bounceInDown");

    popupWrapper.addEventListener("click", () => {
        popupWindow.classList.remove("animate__bounceInDown");
        popupWindow.classList.add("animate__fadeOut"); 

        popupWrapper.classList.remove("animate__fadeIn"); 
        popupWrapper.classList.add("animate__fadeOut"); 

        setTimeout(() =>{
            popupWindow.style.display = "none";
            popupWrapper.style.display = "none";
        }, 1000)
    }, false)

}
export default openPopup;