const showMoreBtn = document.querySelector(".task__more-btn");
const hiddenCheckbox = document.querySelector(".task__checkbox");
const customCheckbox = document.querySelector(".task__custom-checkbox");
const taskList = document.querySelector(".task__list");
const taskFiterBtns = document.querySelectorAll(".task__games-btn");
const showedTaskNum = document.querySelector(".task__more-showed");
import openSideMenu from "./modules/openSideMenu";
import headerMobileAnimetion from "./modules/headerMobileAnimetion";
import renderTasks from "./modules/renderTasks";
import showByGameName from "./modules/showByGameName"
import filterTasksByName from "./modules/filterTasksByName.js"





showByGameName("dota2", "dota2");
showByGameName("csgo", "csgo");
showByGameName("wot", "wot");
showByGameName("pubg", "pubg");
showByGameName("heartstone", "heartstone");
showByGameName("lol", "lol");
showByGameName("minecraft", "minecraft");
showByGameName("warface", "warface");



filterTasksByName("#side-filter__dota2", "dota2");
filterTasksByName("#side-filter__pubg", "pubg");
filterTasksByName("#side-filter__csgo", "csgo");
filterTasksByName("#side-filter__wot", "wot");
filterTasksByName("#side-filter__minecraft", "minecraft");
filterTasksByName("#side-filter__lol", "lol");
filterTasksByName("#side-filter__heart-stone", "heartstone");
filterTasksByName("#side-filter__warface", "warface");
filterTasksByName("#side-filter__all-btn", "all");





window.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth < 786 || window.innerWidth == 786){
        openSideMenu(".mobile-header__menu", ".side-menu__close-btn", ".side-menu");
        openSideMenu(".mobile-header__filter", ".side-filter__close-btn", ".side-filter");
        headerMobileAnimetion();
    }


});

showMoreBtn.addEventListener("click", () => {
    const taskItems = taskList.querySelectorAll("li");
    taskItems.forEach(item => {
        item.style.display = "block"
    });
    renderTasks()
    showedTaskNum.textContent = +showedTaskNum.textContent + 50;


})

hiddenCheckbox.addEventListener("input", () => {
    customCheckbox.classList.toggle("task__custom-checkbox--checked")
    if(customCheckbox.classList.contains("task__custom-checkbox--checked")){
        const taskItems = taskList.querySelectorAll("li");
        taskItems.forEach(item => {
            item.style.display = "block"
        });
        taskFiterBtns.forEach(btn => {
            btn.classList.remove("active")
        })
    }
});



















