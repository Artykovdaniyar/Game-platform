import openSideMenu from "./modules/openSideMenu.js"
import headerMobileAnimetion from "./modules/headerMobileAnimetion.js"




if(window.innerWidth < 426){
    window.addEventListener("DOMContentLoaded", () =>{
        openSideMenu(".header__menu", ".side-menu__exit-btn", ".side-menu");
        headerMobileAnimetion()
    })
}









