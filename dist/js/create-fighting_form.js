(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _ValidNumChecker = require("./modules/ValidNumChecker");

var _ValidNumChecker2 = _interopRequireDefault(_ValidNumChecker);

var _formValidChecker = require("./modules/formValidChecker");

var _formValidChecker2 = _interopRequireDefault(_formValidChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nextBtn = document.querySelector(".create-fighting__next-btn");
var textarea = document.querySelector("textarea");
var betPriceInput = document.querySelector(".create-fighting__bet-input");
var fightingTimeInput = document.querySelector(".create-fighting__time-input");
var fightingDateInput = document.querySelector(".create-fighting__date-input");
var inputs = Array.from(document.querySelectorAll("input"));
inputs.push(textarea);

inputs.forEach(function (input) {
    (0, _formValidChecker2.default)(input);
});

(0, _ValidNumChecker2.default)(betPriceInput, 500);

fightingTimeInput.addEventListener("input", function (e) {
    if (e.inputType != "deleteContentBackward") {
        if (fightingTimeInput.value.length == 2) {
            fightingTimeInput.value = fightingTimeInput.value + ":";
        }
    }
});
fightingDateInput.addEventListener("input", function (e) {
    if (e.inputType != "deleteContentBackward") {
        if (fightingDateInput.value.length == 2 || fightingDateInput.value.length == 5) {
            fightingDateInput.value = fightingDateInput.value + ".";
        }
    }
});

nextBtn.addEventListener("click", function (e) {
    inputs.forEach(function (input) {
        if (input.value == "" || input.classList.contains("invalid__input")) {
            e.preventDefault();
            input.classList.add("invalid__input");
            input.addEventListener("focus", function (e) {
                e.target.classList.remove("invalid__input");
            });
        }
    });
});

},{"./modules/ValidNumChecker":2,"./modules/formValidChecker":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ValidNumChecker = function ValidNumChecker(input, minNum) {
    input.addEventListener("input", function () {
        if (+input.value < minNum) {
            input.classList.remove("valid__input");
            input.classList.add("invalid__input");
        }
    });
};
exports.default = ValidNumChecker;

},{}],3:[function(require,module,exports){
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
