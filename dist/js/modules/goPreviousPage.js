const goPreviousPage = () =>{
    const backBtn = document.querySelector(".btn__back");
    backBtn.addEventListener("click", () =>{
        window.history.back()
    })
}
export default goPreviousPage;