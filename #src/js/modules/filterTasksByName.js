const filterTasksByName = (btnSelector, gameName) => {
    const btn = document.querySelector(btnSelector);
    const taskList = document.querySelector(".task__list");
    
    const sideFilter = document.querySelector(".side-filter");
    const popupWrapper = document.querySelector(".popup__wrapper")
    
    if(gameName == "all"){
        btn.addEventListener("click", (e) => {
            document.body.classList.remove("noscroll")
            sideFilter.classList.remove("active")
            popupWrapper.classList.remove("animate__fadeIn"); 
            popupWrapper.classList.add("animate__fadeOut"); 
            popupWrapper.style.display = "none";
            const taskItems = taskList.querySelectorAll("li");
            taskItems.forEach(item => {
                item.style.display = "block"
            })
        })
    }else{
        
        btn.addEventListener("click", (e) => {
            document.body.classList.remove("noscroll")
            sideFilter.classList.remove("active")
            popupWrapper.classList.remove("animate__fadeIn"); 
            popupWrapper.classList.add("animate__fadeOut"); 
            popupWrapper.style.display = "none";
            const taskItems = taskList.querySelectorAll("li");
            taskItems.forEach(item => {
                if(item.dataset.game != gameName){
                    item.style.display = "none"
                }else{
                    item.style.display = "block"
                }
            })
        })
    }
    
    




}
export default filterTasksByName