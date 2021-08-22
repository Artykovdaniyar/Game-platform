const accordionTriggers = document.querySelectorAll(".qaa__question")

accordionTriggers.forEach(accordionTrigger => {
    accordionTrigger.addEventListener("click", () => {

        const accordionContent = accordionTrigger.nextElementSibling;
        const acordionIcon = accordionTrigger.firstElementChild.nextElementSibling;


        acordionIcon.classList.toggle("opened");

        if(acordionIcon.classList.contains("opened")){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"
        }else{
            accordionContent.style.maxHeight = 0;
        }

    })
})