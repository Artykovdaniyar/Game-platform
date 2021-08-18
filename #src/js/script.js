// var scrollBefore = 0;
// let header = document.querySelector(".header");
// let nav = document.querySelector(".nav")
// window.addEventListener("scroll", function(){
//     const scrolled = window.scrollY;
    

//     if(scrollBefore > scrolled){
//         if(scrollY > 300){
//             nav.classList.remove("animate__fadeOutDown");
//             nav.classList.add("animate__fadeInUp");
//             header.classList.remove("animate__fadeInDown")
//             header.classList.add("animate__fadeOutUp")    
//         }else if(scrollY < 300){
//             header.classList.remove("animate__fadeOutUp")
//             header.classList.add("animate__fadeInDown")
//         }



//         scrollBefore = scrolled;
//         // console.log("ScrollUP");
//         // //Desired action
//     }else{


//             nav.classList.remove("animate__fadeInUp");
//             nav.classList.add("animate__fadeOutDown");
//             if(header.classList.contains("animate__fadeOutUp")){
//                 header.classList.remove("animate__fadeOutUp")
//                 header.classList.add("animate__fadeInDown")
//             }

//         scrollBefore = scrolled;
//         // console.log("ScrollDOWN");
//         // // Desired action
//     }

// })
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
console.log(tabBtn2)

