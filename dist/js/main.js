(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _openSideMenu = require("./modules/openSideMenu");

var _openSideMenu2 = _interopRequireDefault(_openSideMenu);

var _headerMobileAnimetion = require("./modules/headerMobileAnimetion");

var _headerMobileAnimetion2 = _interopRequireDefault(_headerMobileAnimetion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 426) {
        (0, _openSideMenu2.default)(".mobile-header__menu", ".side-menu__exit-btn", ".side-menu");
        (0, _headerMobileAnimetion2.default)();
    }
});

},{"./modules/headerMobileAnimetion":2,"./modules/openSideMenu":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var headerMobileAnimetion = function headerMobileAnimetion() {
    var scrollBefore = 0;
    var header = document.querySelector(".mobile-header");

    header.classList.add("animate__animated");

    window.addEventListener("scroll", function () {
        var scrolled = window.scrollY;

        if (scrollBefore > scrolled) {
            scrollBefore = scrolled;
            if (header.classList.contains("animate__slideOutUp")) {
                header.classList.remove("animate__slideOutUp");
                header.classList.add("animate__slideInDown");
            }

            // console.log("ScrollUP");
            // //Desired action
        } else {

            scrollBefore = scrolled;
            if (scrollY > 0) {
                header.classList.remove("animate__slideInDown");
                header.classList.add("animate__slideOutUp");
            } else if (scrollY < 0) {
                header.classList.remove("animate__slideOutUp");
                header.classList.add("animate__slideInDown");
            }

            // console.log("ScrollDOWN");
            // // Desired action
        }
    });
};
exports.default = headerMobileAnimetion;

},{}],3:[function(require,module,exports){
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
