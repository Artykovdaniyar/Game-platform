const showMoreBtn = document.querySelector(".task__more-btn");
const dota2filterBtn = document.querySelector('button[data-gamename="dota2"]');
const csgofilterBtn = document.querySelector('button[data-gamename="csgo"]');
const wotfilterBtn = document.querySelector('button[data-gamename="wot"]');
const heartStonefilterBtn = document.querySelector('button[data-gamename="hearthstone"]');
const warFacefilterBtn = document.querySelector('button[data-gamename="warface"]');
const LolfilterBtn = document.querySelector('button[data-gamename="lol"]');
const pubgfilterBtn = document.querySelector('button[data-gamename="pubg"]');
const minecraftfilterBtn = document.querySelector('button[data-gamename="minecraft"]');
const taskForm = document.querySelector(".task__filter");
const hiddenCheckbox = document.querySelector(".task__checkbox");
const customCheckbox = document.querySelector(".task__custom-checkbox");
const taskList = document.querySelector(".task__list");
const taskFiterBtns = document.querySelectorAll(".task__games-btn");



import openSideMenu from "./modules/openSideMenu";
import headerMobileAnimetion from "./modules/headerMobileAnimetion";
import renderTasks from "./modules/renderTasks";
import showByGameName from "./modules/showByGameName"




showByGameName(dota2filterBtn, "dota2");
showByGameName(csgofilterBtn, "csgo");
showByGameName(wotfilterBtn, "wot");
showByGameName(pubgfilterBtn, "pubg");
showByGameName(heartStonefilterBtn, "heartstone");
showByGameName(LolfilterBtn, "lol");
showByGameName(minecraftfilterBtn, "minecraft");
showByGameName(warFacefilterBtn, "warface");






window.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth < 786 || window.innerWidth == 786){
        openSideMenu(".mobile-header__menu", ".side-menu__close-btn", ".side-menu");
        headerMobileAnimetion();
    }
    showMoreBtn.addEventListener("click", () => {
        renderTasks()
    })



    if(window.innerWidth > 1200){
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 400){
                taskForm.classList.add("task__filter--fixed");
                taskForm.firstElementChild.classList.add("page__container");
                
            }
            else if(window.scrollY < 400){
                taskForm.classList.remove("task__filter--fixed");
                taskForm.firstElementChild.classList.remove("page__container");
            }
        
        });
    }
});

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



















