import openSideMenu from "./modules/openSideMenu";
        import headerMobileAnimetion from "./modules/headerMobileAnimetion";
window.addEventListener("DOMContentLoaded", () => {
    if(window.innerWidth < 426){
        openSideMenu(".mobile-header__menu", ".side-menu__exit-btn", ".side-menu");
        headerMobileAnimetion();
    }
});





















