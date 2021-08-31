(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _openPopup = require("./modules/openPopup");

var _openPopup2 = _interopRequireDefault(_openPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var input = document.querySelector(".page__input");
var responseBtn = document.querySelector(".fighting__response-btn");
var balanceInfo = document.querySelector(".balance");
var balance = 4000;
var fightingPrice = document.querySelector(".fighting__response-price-sum").textContent.replace(/[а-я]{1,}/, "");


// formValidChecker(input)
responseBtn.addEventListener("click", function (e) {
    if (input.value == "") {
        e.preventDefault();
        input.classList.add("invalid__input");
    } else if (fightingPrice > balance) {
        e.preventDefault();
        balanceInfo.style.display = "flex";
    } else {
        e.preventDefault();
        (0, _openPopup2.default)();
    }
});

},{"./modules/openPopup":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var openPopup = function openPopup() {
    var popupWindow = document.querySelector(".popup");
    var popupWrapper = document.querySelector(".popup__wrapper");

    popupWrapper.style.display = "block";
    popupWrapper.classList.remove("animate__fadeOut");
    popupWrapper.classList.add("animate__fadeIn");

    popupWindow.style.display = "flex";

    popupWindow.classList.remove("animate__fadeOut");
    popupWindow.classList.add("animate__bounceInDown");

    popupWrapper.addEventListener("click", function () {
        popupWindow.classList.remove("animate__bounceInDown");
        popupWindow.classList.add("animate__fadeOut");

        popupWrapper.classList.remove("animate__fadeIn");
        popupWrapper.classList.add("animate__fadeOut");

        setTimeout(function () {
            popupWindow.style.display = "none";
            popupWrapper.style.display = "none";
        }, 1000);
    }, false);
};
exports.default = openPopup;

},{}]},{},[1]);
