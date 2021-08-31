const openSideMenu = (triggerBtnSelector, closeBtnSelctor, menuSelector) =>{
    const   triggerBtn =  document.querySelector(triggerBtnSelector),
            closeBtn = document.querySelector(closeBtnSelctor),
            menu = document.querySelector(menuSelector);


        triggerBtn.addEventListener("click", () => {
            menu.classList.add("active");
            document.body.classList.add("noscroll")
        });
        
        closeBtn.addEventListener("click", () => {
            document.body.classList.remove("noscroll")
            menu.classList.remove("active");
        })

};
export default openSideMenu; 