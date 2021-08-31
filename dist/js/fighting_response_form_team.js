(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _variables = require("./modules/variables");

var _formValidChecker = require("./modules/formValidChecker");

var _formValidChecker2 = _interopRequireDefault(_formValidChecker);

var _openPopup = require("./modules/openPopup");

var _openPopup2 = _interopRequireDefault(_openPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inputs = document.querySelectorAll(".page__input");
var responseBtn = document.querySelector(".fighting__response-btn");
var popupWindow = document.querySelector(".popup");

console.log(_variables.balance);

inputs.forEach(function (input) {
    (0, _formValidChecker2.default)(input);
});

responseBtn.addEventListener("click", function (e) {
    var validChecker = 0;
    inputs.forEach(function (input) {
        if (input.value == "" || input.classList.contains("invalid__input")) {
            e.preventDefault();
            input.classList.add("invalid__input");
        } else {
            validChecker++;
        }
    });
    if (validChecker > 0) {
        (0, _openPopup2.default)();
    }
});

// responseBtn.addEventListener("click", (e) => {

//     if(input.value == ""){
//         e.preventDefault()
//         input.classList.add("invalid__input")
//     }else if(fightingPrice > balance){
//         e.preventDefault()
//         balanceInfo.style.display = "flex"
//     }else{
//         e.preventDefault()
//         openPopup(popupWindow, "Отклик на сражение успешно отправлен")
//     }
// })

},{"./modules/formValidChecker":2,"./modules/openPopup":3,"./modules/variables":4}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var balance = exports.balance = 750;

},{}]},{},[1]);
