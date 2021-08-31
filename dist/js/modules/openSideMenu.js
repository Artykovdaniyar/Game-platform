(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var openSideMenu = function openSideMenu(triggerBtnSelector, closeBtnSelctor, menuSelector) {
    var triggerBtn = document.querySelector(triggerBtnSelector),
        closeBtn = document.querySelector(closeBtnSelctor),
        menu = document.querySelector(menuSelector);

    triggerBtn.addEventListener("click", function () {
        menu.classList.add("active");
        document.body.classList.add("noscroll");
    });

    closeBtn.addEventListener("click", function () {
        document.body.classList.remove("noscroll");
        menu.classList.remove("active");
    });
};
exports.default = openSideMenu;

},{}]},{},[1]);
