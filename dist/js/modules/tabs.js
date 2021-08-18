let tabBtn1 = document.querySelector(".tabs__btn1");
let tabBtn2 = document.querySelector(".tabs__btn2");
let tabContent1 = document.querySelector(".tabs__content1")
let tabContent2 = document.querySelector(".tabs__content2")

tabBtn2.addEventListener("click", function(){
    alert(1)
    // tabBtn2.classList.add("active");
    // tabBtn1.classList.remove("active");
    // tabContent2.style.display = "inline-block";
    // tabContent1.style.display = "none";
});
executorBtn.addEventListener("click", function(){
    customerBtn.classList.remove("active");
    executorBtn.classList.add("active");
    customerAria.style.display = "none";
    executorAria.style.display = "inline-block";
});

console.log(tabBtn1);