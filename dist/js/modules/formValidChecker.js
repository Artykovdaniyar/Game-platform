(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var formValidChecker = function formValidChecker(input) {

    input.addEventListener("focus", function () {
        if (input.validity.valid == true) {
            input.classList.remove("invalid__input");
        }
    });

    input.addEventListener("keydown", function () {
        if (input.validity.valid == true) {
            input.classList.remove("invalid__input");
            input.classList.add("valid__input");
        }
    });

    input.addEventListener("blur", function () {
        if (input.value.trim() == "" || input.value.trim() == 0) {
            input.classList.remove("valid__input");
            input.classList.add("invalid__input");
        } else {
            input.classList.add("valid__input");
        }
    });
};
exports.default = formValidChecker;

},{}]},{},[1]);
