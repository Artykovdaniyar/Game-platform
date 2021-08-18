let games = document.querySelectorAll(".create-fighting__game");

games.forEach(game =>{

    game.addEventListener("click", function(e){
        games.forEach(game => {
            game.classList.remove("create-fighting__game--checked");
        })
        this.classList.toggle("create-fighting__game--checked");
    });
});