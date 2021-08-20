const ValidNumChecker = (input, minNum) => {
    input.addEventListener("input", () =>{
        if(+input.value < minNum){
            input.classList.remove("valid__input")
            input.classList.add("invalid__input")
        }
    })
}
export default ValidNumChecker;