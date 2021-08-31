(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var nextBtn = document.querySelector(".create-fighting__next-btn");
var gameList = document.querySelectorAll(".create-fighting__game");

gameList.forEach(function (game) {

    game.addEventListener("click", function (e) {
        gameList.forEach(function (game) {
            game.classList.remove("create-fighting__game_checked");
        });
        this.classList.toggle("create-fighting__game_checked");
    });
});

nextBtn.addEventListener("click", function (e) {
    var gameSelectCheker = "";
    gameList.forEach(function (game) {
        if (game.classList.contains("create-fighting__game_checked")) {
            gameSelectCheker = "a game selected";
        }
    });
    if (gameSelectCheker == "") {
        e.preventDefault();
    }
});

},{}]},{},[1]);
