const headerMobileAnimetion = () => {
    let scrollBefore = 0;
    const header = document.querySelector(".page__header");

    header.classList.add("animate__animated");


    window.addEventListener("scroll", function(){
        let scrolled = window.scrollY;
        
        if(scrollBefore > scrolled){
            scrollBefore = scrolled;
            if(header.classList.contains("animate__slideOutUp")){
                header.classList.remove("animate__slideOutUp")
                header.classList.add("animate__slideInDown")
            }



            // console.log("ScrollUP");
            // //Desired action
        }else{
            
            scrollBefore = scrolled;
            if(scrollY > 0){
                header.classList.remove("animate__slideInDown")
                header.classList.add("animate__slideOutUp")   
            }else if(scrollY < 0){
                header.classList.remove("animate__slideOutUp")
                header.classList.add("animate__slideInDown")
            }
 


            // console.log("ScrollDOWN");
            // // Desired action
        }

    })
}
export default headerMobileAnimetion;