const openSideMenu = (triggerBtnSelector, closeBtnSelctor, menuSelector) =>{
    const   triggerBtn =  document.querySelector(triggerBtnSelector),
            closeBtn = document.querySelector(closeBtnSelctor),
            menu = document.querySelector(menuSelector),
            popupWrapper = document.querySelector(".popup__wrapper");


        triggerBtn.addEventListener("click", () => {
            menu.classList.add("active");
            document.body.classList.add("noscroll")
            popupWrapper.style.display = "block";
            popupWrapper.classList.remove("animate__fadeOut"); 
            popupWrapper.classList.add("animate__fadeIn"); 
        });
        
        closeBtn.addEventListener("click", () => {
            document.body.classList.remove("noscroll")
            menu.classList.remove("active");
            popupWrapper.classList.remove("animate__fadeIn"); 
            popupWrapper.classList.add("animate__fadeOut"); 
            setTimeout(() =>{
                popupWrapper.style.display = "none";
            }, 1000)
        })
        popupWrapper.addEventListener("click", () => {
            document.body.classList.remove("noscroll")
            menu.classList.remove("active");
    
            popupWrapper.classList.remove("animate__fadeIn"); 
            popupWrapper.classList.add("animate__fadeOut"); 
    
            setTimeout(() =>{
                popupWrapper.style.display = "none";
            }, 1000)
        }, false)

};
export default openSideMenu; 