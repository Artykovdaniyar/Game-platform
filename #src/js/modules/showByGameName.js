const showByGameName = (btn, gameName) =>{
    btn.addEventListener("click", (e) => {
        const taskList = document.querySelector(".task__list");
        const taskItems = taskList.querySelectorAll("li");
        const filterbtns = document.querySelectorAll(".task__games-btn");
        filterbtns.forEach(btn => {
            btn.classList.remove("active")
        });
        e.target.classList.add("active")

        taskItems.forEach(item => {

            if(item.dataset.game != gameName){
                item.style.display = "none"


            }else{
                item.style.display = "block"
            }

        })
    })
};
export default showByGameName;