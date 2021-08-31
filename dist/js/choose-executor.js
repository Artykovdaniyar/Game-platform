(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _openPopup = require("./modules/openPopup");

var _openPopup2 = _interopRequireDefault(_openPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chooseExecutorBtn = document.querySelector(".fighting__choose-btn");

chooseExecutorBtn.addEventListener("click", function () {
    (0, _openPopup2.default)();
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
