const teamOpenTrigger = document.querySelector(".fighting__members");
const teatList = document.querySelector(".fighting__members-list");
const teamIcon = document.querySelector(".fighting__members-icon");


teamOpenTrigger.addEventListener("click", function(){
    teatList.classList.toggle("opened");
    teamIcon.classList.toggle("opened");
})
