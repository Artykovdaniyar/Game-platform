const   cardNum = document.querySelector(".balance-up__card-num"),
        cardMonth = document.querySelector(".balance-up__card-month"),
        cardYear = document.querySelector(".balance-up__card-year"),
        cardCvc = document.querySelector(".balance-up__card-cvc"),
        topUpSum = document.querySelector(".balance-up__sum"),
        topUpBtn = document.querySelector(".balance-up__btn"),
        allInputs = document.querySelectorAll("input"),
        topUpPopup = document.querySelector(".balance-up__popup");

import openPopup from "./modules/openPopup"






cardNum.addEventListener("input", function(e){
    let value = e.target.value
    if(isNaN(value)){
        cardNum.classList.remove("valid__input")
        cardNum.classList.add("invalid__input");
        if(value.match(/[а-яА-ЯёЁa-zA-Z]/)){
            cardNum.value = value.replace(e.target.value, "")
        }
    }

    if(e.inputType != "deleteContentBackward"){
        if(cardNum.value.length == "4" || cardNum.value.length == "9" || cardNum.value.length == "14"){
            cardNum.value = cardNum.value + " "
        }
    }
});


cardYear.addEventListener("input", function(e){
    if(cardYear.value.length > 2){
        cardYear.value = cardYear.value.slice(0, 2);
    } 
    else if(cardYear.value <= "20"){
        cardYear.classList.remove("valid__input")
        cardYear.classList.add("invalid__input");

    }else if(cardYear.validity.valid == true){
        cardYear.classList.remove("invalid__input");
        cardYear.classList.add("valid__input")

    }

});

cardMonth.addEventListener("input", function(e){
    if(cardMonth.value.length > 2){
        cardMonth.value = cardMonth.value.slice(0, 2);
    }else if(cardMonth.value.length < 2){
        cardMonth.classList.remove("valid__input")
        cardMonth.classList.add("invalid__input");
    }else if(cardMonth.validity.valid == true){
        cardMonth.classList.remove("invalid__input");
        cardMonth.classList.add("valid__input")

    }

});

cardCvc.addEventListener("input", function(e){
    if(cardCvc.value.length > 3){
        cardCvc.value = cardCvc.value.slice(0, 3);
    }else if(cardCvc.value.length < 3){
        cardCvc.classList.remove("valid__input")
        cardCvc.classList.add("invalid__input");
    }
});







function validChecer(input){
    input.addEventListener("keydown", function(){
        if(input.validity.valid == true){
            input.classList.remove("invalid__input");
            input.classList.add("valid__input")
        }
    })

} 
function inputValueChecker(input){
    input.addEventListener("blur", function(){
        if(input.value.trim() == "" || input.value.trim() == 0){
            input.classList.remove("valid__input")
            input.classList.add("invalid__input");
        }
    })
}



validChecer(cardNum)
inputValueChecker(cardNum)

inputValueChecker(cardYear)

validChecer(cardMonth)
inputValueChecker(cardMonth)

validChecer(cardCvc)
inputValueChecker(cardCvc)

validChecer(topUpSum)
inputValueChecker(topUpSum)



topUpBtn.addEventListener("click", (e) => {
    allInputs.forEach(input => {
        if(input.classList.contains("invalid__input")){
            e.preventDefault()
        }else if(input.classList.contains("valid__input")){
            e.preventDefault()
            openPopup()
        }
    });
})


