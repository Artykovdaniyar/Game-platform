const   topUpPopup = document.querySelector(".fighting-public__popup"),
        publicBtn = document.querySelector(".fighting__public-btn");

publicBtn.addEventListener("click", (e) => {
    e.preventDefault()
    topUpPopup.style.display = "flex"
    topUpPopup.classList.add("animate__bounceInDown")

})