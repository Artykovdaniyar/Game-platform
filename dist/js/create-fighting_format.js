(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var formatInput = document.getElementById("create-fighting__format-input");
var crewInput = document.querySelector(".create-fighting__crew-input");
var formatMenu = document.querySelector(".create-fighting__format-menu");
var formatItems = document.querySelectorAll(".create-fighting__format-item");
var nextBtn = document.querySelector(".create-fighting__next-btn");
var crewWrapper = document.querySelector(".create-fighting__crew-wrapper");
var playerList = document.querySelector(".create-fighting__player-list");

var balance = 5000;
var betPrice = 1000;
var balanceInfo = document.querySelector(".balance");

formatInput.addEventListener("input", function () {
    this.value.trim();
    this.value = "";
});

formatItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
        formatMenu.classList.remove("active");
        formatInput.value = this.innerText;

        if (e.target.innerText == "2x2") {
            removeAddPlayer();
            crewWrapper.classList.add("active");
            addPlayerRender();
        } else if (e.target.innerText == "3x3") {
            removeAddPlayer();
            crewWrapper.classList.add("active");
            addPlayerRender();
            addPlayerRender();
        } else if (e.target.innerText == "4x4") {
            removeAddPlayer();
            crewWrapper.classList.add("active");
            addPlayerRender();
            addPlayerRender();
            addPlayerRender();
        } else if (e.target.innerText == "5x5") {
            removeAddPlayer();
            crewWrapper.classList.add("active");
            addPlayerRender();
            addPlayerRender();
            addPlayerRender();
            addPlayerRender();
        } else if (e.target.innerText == "1x1") {
            crewWrapper.classList.remove("active");
            removeAddPlayer();
        }
    });
});

formatInput.addEventListener("click", function () {
    formatMenu.classList.toggle("active");
    formatInput.classList.remove("invalid__input");
});

nextBtn.addEventListener("click", function (e) {
    if (formatInput.value == "") {
        e.preventDefault();
        formatInput.classList.add("invalid__input");
    } else if (formatInput.value != "1x1" && crewInput.value == "") {
        e.preventDefault();
        crewInput.classList.add("invalid__input");
    } else if (balance < betPrice) {
        e.preventDefault();
        balanceInfo.style.display = "flex";
    }
});
crewInput.addEventListener("click", function () {
    crewInput.classList.remove("invalid__input");
});

function addPlayerRender() {
    var addPlayerItem = document.createElement("li");
    addPlayerItem.classList.add("create-fighting__addplayer");
    addPlayerItem.innerHTML = "\n    <a href=\"../pages/search-player.html\" class=\"create-fighting__addplayer-link\">\n        <span class=\"create-fighting__addplayer-title\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0438\u0433\u0440\u043E\u043A\u0430</span>\n        <svg class=\"create-fighting__addplayer-icon\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z\" fill=\"#535C65\"/>\n        </svg>\n    </a>\n    ";
    playerList.appendChild(addPlayerItem);
}

function removeAddPlayer() {
    var addPlayerItems = document.querySelectorAll(".create-fighting__addplayer");
    addPlayerItems.forEach(function (item) {
        item.remove();
    });
}

},{}]},{},[1]);
