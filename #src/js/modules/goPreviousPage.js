const goPreviousPage = () =>{
    const backBtn = document.querySelector(".mobile-header__back-btn");
    backBtn.addEventListener("click", () =>{
        window.history.back()
    })
}
export default goPreviousPage;