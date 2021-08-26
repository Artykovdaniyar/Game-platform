const winPercentNum = document.querySelectorAll(".profile__game-statistic-win-percent");

winPercentNum.forEach(num =>{
    if(num.textContent >= 0 && num.textContent < 25){
        num.style.color = "#FF0000"
    }else if(num.textContent >= 25 && num.textContent < 50){
        num.style.color = "#FF7A00"
    }else if(num.textContent >= 50 && num.textContent < 75){
        num.style.color = "#4CEF00"
    }else if(num.textContent >= 75 && num.textContent <= 100){
        num.style.color = "#6700EB"
    }
})




function colorPercentNum(){

}

