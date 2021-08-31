const tabs = () => {
    let tabBtn1 = document.querySelector(".tabs__btn1");
    let tabBtn2 = document.querySelector(".tabs__btn2");
    let tabContent1 = document.querySelector(".tabs__content1")
    let tabContent2 = document.querySelector(".tabs__content2")
    
    tabBtn2.addEventListener("click", function(){
        tabBtn2.classList.add("active");
        tabBtn1.classList.remove("active");
        tabContent2.classList.add("active")
        tabContent1.classList.remove("active")
    });
    tabBtn1.addEventListener("click", function(){
        tabBtn2.classList.remove("active");
        tabBtn1.classList.add("active");
        tabContent1.classList.add("active")
        tabContent2.classList.remove("active")
    });
};
export default tabs;

