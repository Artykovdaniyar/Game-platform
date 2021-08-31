(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var tabs = function tabs() {
    var tabBtn1 = document.querySelector(".tabs__btn1");
    var tabBtn2 = document.querySelector(".tabs__btn2");
    var tabContent1 = document.querySelector(".tabs__content1");
    var tabContent2 = document.querySelector(".tabs__content2");

    tabBtn2.addEventListener("click", function () {
        tabBtn2.classList.add("active");
        tabBtn1.classList.remove("active");
        tabContent2.classList.add("active");
        tabContent1.classList.remove("active");
    });
    tabBtn1.addEventListener("click", function () {
        tabBtn2.classList.remove("active");
        tabBtn1.classList.add("active");
        tabContent1.classList.add("active");
        tabContent2.classList.remove("active");
    });
};
exports.default = tabs;

},{}],2:[function(require,module,exports){
"use strict";

var _tabs = require("./modules/tabs");

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tabs2.default)();

},{"./modules/tabs":1}]},{},[2]);
