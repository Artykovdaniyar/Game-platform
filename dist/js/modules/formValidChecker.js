const formValidChecker = input => {

    input.addEventListener("keydown", function(){
        if(input.validity.valid == true){
            input.classList.remove("invalid__input");
            input.classList.add("valid__input")
        }
    });

    input.addEventListener("blur", function(){
        if(input.value.trim() == "" || input.value.trim() == 0){
            input.classList.remove("valid__input")
            input.classList.add("invalid__input");
        }
    });
}
export default formValidChecker;