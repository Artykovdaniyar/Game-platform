const nextBtn =  document.querySelector(".create-fighting__next-btn");
const gameList = document.querySelectorAll(".create-fighting__game");


gameList.forEach(game =>{

    game.addEventListener("click", function(e){
        gameList.forEach(game => {
            game.classList.remove("create-fighting__game_checked");
        })
        this.classList.toggle("create-fighting__game_checked");
    });
});


nextBtn.addEventListener("click", (e) => {
    let gameSelectCheker = ""
    gameList.forEach(game => {
        if(game.classList.contains("create-fighting__game_checked")){
            gameSelectCheker = "a game selected"
        }
    })
    if(gameSelectCheker == ""){
        e.preventDefault()
    }

})