const teamOpenTrigger = document.querySelector(".fighting__members");
const teatList = document.querySelector(".fighting__members-list");
const teamIcon = document.querySelector(".fighting__members-icon");
const   topUpPopup = document.querySelector(".fighting-public__popup"),
        publicBtn = document.querySelector(".fighting__public-btn");

teamOpenTrigger.addEventListener("click", function(){
    teatList.classList.toggle("opened");
    teamIcon.classList.toggle("opened");
})



publicBtn.addEventListener("click", (e) => {
    e.preventDefault()
    topUpPopup.style.display = "flex"
    topUpPopup.classList.add("animate__bounceInDown")

})