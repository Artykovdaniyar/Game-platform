(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _formValidChecker = require("./modules/formValidChecker");

var _formValidChecker2 = _interopRequireDefault(_formValidChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadPersonalDocImgInput = document.querySelector(".identification__person-doc-input");
var loadAdressDocImgInput = document.querySelector(".identification__address-doc-input");
var loadPersonalDocImgBtn = document.querySelector(".identification__person-doc-btn");
var loadAdressDocImgBtn = document.querySelector(".identification__address-doc-btn");

var previewCloseBtn = document.querySelectorAll(".identification__preview-close-btn");
var allInputs = document.querySelectorAll("input");
var submitBtn = document.querySelector(".identification__submit-btn");
var previewWrappers = document.querySelectorAll(".identification__preview-wrapper");

allInputs.forEach(function (input) {
    (0, _formValidChecker2.default)(input);
});

function previewloadedImg(input) {
    input.addEventListener("change", function (e) {
        if (this.files[0]) {
            var fr = new FileReader();

            fr.addEventListener("load", function () {
                var previewDisplay = e.target.parentElement.nextElementSibling;
                var loadInput = e.target.parentElement;
                previewDisplay.style.backgroundImage = "url(" + fr.result + ")";
                previewDisplay.style.display = "flex";
                loadInput.style.display = "none";

                previewCloseBtn.forEach(function (btn) {
                    btn.addEventListener("click", function (evt) {
                        evt.target.parentElement.style.display = "none";
                        evt.target.parentElement.previousElementSibling.style.display = "block";
                    });
                });
            }, false);

            fr.readAsDataURL(this.files[0]);
        }
    });
}

previewloadedImg(loadAdressDocImgInput);
previewloadedImg(loadPersonalDocImgInput);

submitBtn.addEventListener("click", function (e) {
    allInputs.forEach(function (input) {
        if (input.value == "" || input.classList.contains("invalid__input")) {
            e.preventDefault();
            input.classList.add("invalid__input");
            input.addEventListener("focus", function (e) {
                e.target.classList.remove("invalid__input");
            });
        }
    });

    if (loadPersonalDocImgBtn.style.display != "none" || loadAdressDocImgBtn.style.display != "none") {
        e.preventDefault();
        loadPersonalDocImgBtn.classList.add("invalid__input");
        loadAdressDocImgBtn.classList.add("invalid__input");
    }
});

},{"./modules/formValidChecker":2}],2:[function(require,module,exports){
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
