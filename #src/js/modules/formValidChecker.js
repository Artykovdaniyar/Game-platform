const formValidChecker = input => {
    input.addEventListener("click", function(){
        alert(1)
    })
    input.addEventListener("focusout", function(){
        if(input.value == ""){
            input.classList.add("invalid__input")
        }
    });

    input.addEventListener("focusin", function(){
        input.classList.remove("invalid__input")

    });
    console.log("It works!")

}
export default formValidChecker;