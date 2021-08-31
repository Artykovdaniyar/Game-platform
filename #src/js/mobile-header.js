import goPreviousPage from "./modules/goPreviousPage" ;
import headerMobileAnimetion from "./modules/headerMobileAnimetion"
window.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth < 426){
        goPreviousPage();
        headerMobileAnimetion();
    }
})