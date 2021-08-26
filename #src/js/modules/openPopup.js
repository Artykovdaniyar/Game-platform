const openPopup = (popuuWindow, popupMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor", popupBtnText = "Перейти к главной странице", popupBtnHref = "../index.html") => {


    const popupText = document.querySelector(".popup__text");
    const popupBtn = document.querySelector(".popup__btn");

    popupText.textContent = popupMessage;
    popupBtn.textContent = popupBtnText;
    popupBtn.href = popupBtnHref;

    popuuWindow.style.display = "flex"
    popuuWindow.classList.add("animate__bounceInDown");


}
export default openPopup;