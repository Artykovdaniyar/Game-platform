var scrollBefore = 0;
let header = document.querySelector(".header");
let nav = document.querySelector(".nav")
window.addEventListener("scroll", function(){
    const scrolled = window.scrollY;
    

    if(scrollBefore > scrolled){
        if(scrollY > 300){
            nav.classList.remove("animate__fadeOutDown");
            nav.classList.add("animate__fadeInUp");
            header.classList.remove("animate__fadeInDown")
            header.classList.add("animate__fadeOutUp")    
        }else if(scrollY < 300){
            header.classList.remove("animate__fadeOutUp")
            header.classList.add("animate__fadeInDown")
        }



        scrollBefore = scrolled;
        // console.log("ScrollUP");
        // //Desired action
    }else{


            nav.classList.remove("animate__fadeInUp");
            nav.classList.add("animate__fadeOutDown");
            if(header.classList.contains("animate__fadeOutUp")){
                header.classList.remove("animate__fadeOutUp")
                header.classList.add("animate__fadeInDown")
            }

        scrollBefore = scrolled;
        // console.log("ScrollDOWN");
        // // Desired action
    }







})