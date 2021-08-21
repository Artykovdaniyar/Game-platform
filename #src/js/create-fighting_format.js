// let formatInput = document.querySelector(".create-fighting__format-input");
const formatInput = document.getElementById("create-fighting__format-input");
const crewInput = document.querySelector(".create-fighting__crew-input")
const formatMenu = document.querySelector(".create-fighting__format-menu");
const formatItems = document.querySelectorAll(".create-fighting__format-item");
const nextBtn = document.querySelector(".create-fighting__next-btn");
const crewWrapper = document.querySelector(".create-fighting__crew-wrapper");
let playerList = document.querySelector(".create-fighting__player-list");
let balance = 2750;
let betPrice = 1000; 
const balanceInfo =  document.querySelector(".create-fighting__balance")

import headerMobileAnimetion from "./modules/headerMobileAnimetion.js";
import goPreviousPage from "./modules/goPreviousPage.js";


headerMobileAnimetion();
goPreviousPage();

formatInput.addEventListener("input", function(){
    this.value.trim()
    this.value = "";
})

formatItems.forEach(item => {
    item.addEventListener("click", function(e){
        formatMenu.classList.remove("active")
        formatInput.value = this.innerText;

        if(e.target.innerText == "2x2"){
            removeAddPlayer()
            crewWrapper.classList.add("active");
            addPlayerRender();
        }else if(e.target.innerText == "3x3"){
            removeAddPlayer()
            crewWrapper.classList.add("active");
            addPlayerRender();
            addPlayerRender();


        }else if(e.target.innerText == "4x4"){
            removeAddPlayer()
            crewWrapper.classList.add("active");
            addPlayerRender();
            addPlayerRender();
            addPlayerRender();

        }
        else if(e.target.innerText == "5x5"){
            removeAddPlayer()
            crewWrapper.classList.add("active");
            addPlayerRender();
            addPlayerRender();
            addPlayerRender();
            addPlayerRender();

        }else if(e.target.innerText == "1x1"){
            crewWrapper.classList.remove("active");
            removeAddPlayer()
        }
    })

})


formatInput.addEventListener("click", function(){
    formatMenu.classList.toggle("active");
    formatInput.classList.remove("invalid__input");
});

nextBtn.addEventListener("click", function(e){
    if(formatInput.value == ""){
        e.preventDefault();
        formatInput.classList.add("invalid__input");
    }else if(formatInput.value != "1x1" && crewInput.value == ""){
        e.preventDefault();
        crewInput.classList.add("invalid__input");
    }else if(balance < betPrice){
        e.preventDefault();
        balanceInfo.style.display = "flex"
    }
});
crewInput.addEventListener("click", function(){
    crewInput.classList.remove("invalid__input");
})





function addPlayerRender(){
    let addPlayerItem = document.createElement("li");
    addPlayerItem.classList.add("create-fighting__addplayer");
    addPlayerItem.innerHTML = `
    <a href="../pages/search-player.html" class="create-fighting__addplayer-link">
        <span class="create-fighting__addplayer-title">Добавить игрока</span>
        <svg class="create-fighting__addplayer-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="#535C65"/>
        </svg>
    </a>
    `
    playerList.appendChild(addPlayerItem);
}

function removeAddPlayer(){
    let addPlayerItems = document.querySelectorAll(".create-fighting__addplayer");
    addPlayerItems.forEach(item => {
        item.remove()
    })
}

