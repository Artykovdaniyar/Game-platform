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

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

var _formValidChecker = require("./modules/formValidChecker");

var _formValidChecker2 = _interopRequireDefault(_formValidChecker);

var _openPopup = require("./modules/openPopup");

var _openPopup2 = _interopRequireDefault(_openPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var politenessMarks = document.querySelector(".review__mark-politeness");
var punctualityMarks = document.querySelector(".review__mark-punctuality");
var adequacyMarks = document.querySelector(".review__mark-adequacy");

var politenessBtns = Array.from(document.querySelector(".review__mark-politeness").children);
var punctualityBtns = Array.from(document.querySelector(".review__mark-punctuality").children);
var adequacyBtns = Array.from(document.querySelector(".review__mark-adequacy").children);
var reviewSubmitBtn = document.querySelector(".review__submit-btn");
var reviewComment = document.querySelector(".review__comment-textarea");
var popupWindow = document.querySelector(".popup");

function fillStarMark(array, character, marks) {
    array.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            if (e.target.getAttribute(character) == "5") {
                array.forEach(function (btn) {
                    btn.innerHTML = "\n                    <svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M7.40002 11.75L2.99152 14.4425L4.19002 9.4175L0.267517 6.0575L5.41627 5.645L7.40002 0.875L9.38377 5.645L14.5333 6.0575L10.61 9.4175L11.8085 14.4425L7.40002 11.75ZM7.40002 9.992L9.51277 11.282L8.93827 8.8745L10.8185 7.26425L8.35102 7.06625L7.40002 4.781L6.44902 7.06625L3.98152 7.26425L5.86177 8.8745L5.28727 11.282L7.40002 9.99275V9.992Z\" fill=\"#FFBB3D\"></path>\n                    </svg>\n                    ";
                });
                for (var i = 0; i < 5; i++) {
                    array[i].innerHTML = "\n                        <svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M7.29998 11.75L2.89148 14.4425L4.08998 9.4175L0.16748 6.0575L5.31623 5.645L7.29998 0.875L9.28373 5.645L14.4332 6.0575L10.51 9.4175L11.7085 14.4425L7.29998 11.75Z\" fill=\"#FFBB3D\"/>\n                        </svg>\n                    ";
                }
                marks.dataset.marks = "5";
            } else if (e.target.getAttribute(character) == "4") {
                array.forEach(function (btn) {
                    btn.innerHTML = "\n                    <svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M7.40002 11.75L2.99152 14.4425L4.19002 9.4175L0.267517 6.0575L5.41627 5.645L7.40002 0.875L9.38377 5.645L14.5333 6.0575L10.61 9.4175L11.8085 14.4425L7.40002 11.75ZM7.40002 9.992L9.51277 11.282L8.93827 8.8745L10.8185 7.26425L8.35102 7.06625L7.40002 4.781L6.44902 7.06625L3.98152 7.26425L5.86177 8.8745L5.28727 11.282L7.40002 9.99275V9.992Z\" fill=\"#FFBB3D\"></path>\n                    </svg>\n                    ";
                });
                for (var _i = 0; _i < 4; _i++) {
                    array[_i].innerHTML = "\n                    <svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M7.29998 11.75L2.89148 14.4425L4.08998 9.4175L0.16748 6.0575L5.31623 5.645L7.29998 0.875L9.28373 5.645L14.4332 6.0575L10.51 9.4175L11.7085 14.4425L7.29998 11.75Z\" fill=\"#FFBB3D\"/>\n                    </svg>\n                ";
                }
                marks.dataset.marks = "4";
            } else if (e.target.getAttribute(character) == "3") {
                array.forEach(function (btn) {
                    btn.innerHTML = "\n                    <svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M7.40002 11.75L2.99152 14.4425L4.19002 9.4175L0.267517 6.0575L5.41627 5.645L7.40002 0.875L9.38377 5.645L14.5333 6.0575L10.61 9.4175L11.8085 14.4425L7.40002 11.75ZM7.40002 9.992L9.51277 11.282L8.93827 8.8745L10.8185 7.26425L8.35102 7.06625L7.40002 4.781L6.44902 7.06625L3.98152 7.26425L5.86177 8.8745L5.28727 11.282L7.40002 9.99275V9.992Z\" fill=\"#FFBB3D\"></path>\n                    </svg>\n                    ";
                });
                for (var _i2 = 0; _i2 < 3; _i2++) {
                    array[_i2].innerHTML = "\n                    <svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M7.29998 11.75L2.89148 14.4425L4.08998 9.4175L0.16748 6.0575L5.31623 5.645L7.29998 0.875L9.28373 5.645L14.4332 6.0575L10.51 9.4175L11.7085 14.4425L7.29998 11.75Z\" fill=\"#FFBB3D\"/>\n                    </svg>\n                ";
                }
                marks.dataset.marks = "3";
            } else if (e.target.getAttribute(character) == "2") {
                array.forEach(function (btn) {
                    btn.innerHTML = "\n                    <svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M7.40002 11.75L2.99152 14.4425L4.19002 9.4175L0.267517 6.0575L5.41627 5.645L7.40002 0.875L9.38377 5.645L14.5333 6.0575L10.61 9.4175L11.8085 14.4425L7.40002 11.75ZM7.40002 9.992L9.51277 11.282L8.93827 8.8745L10.8185 7.26425L8.35102 7.06625L7.40002 4.781L6.44902 7.06625L3.98152 7.26425L5.86177 8.8745L5.28727 11.282L7.40002 9.99275V9.992Z\" fill=\"#FFBB3D\"></path>\n                    </svg>\n                    ";
                });
                for (var _i3 = 0; _i3 < 2; _i3++) {
                    array[_i3].innerHTML = "\n                    <svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M7.29998 11.75L2.89148 14.4425L4.08998 9.4175L0.16748 6.0575L5.31623 5.645L7.29998 0.875L9.28373 5.645L14.4332 6.0575L10.51 9.4175L11.7085 14.4425L7.29998 11.75Z\" fill=\"#FFBB3D\"/>\n                    </svg>\n                ";
                }
                marks.dataset.marks = "2";
            } else if (e.target.getAttribute(character) == "1") {
                array.forEach(function (btn) {
                    btn.innerHTML = "\n                    <svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M7.40002 11.75L2.99152 14.4425L4.19002 9.4175L0.267517 6.0575L5.41627 5.645L7.40002 0.875L9.38377 5.645L14.5333 6.0575L10.61 9.4175L11.8085 14.4425L7.40002 11.75ZM7.40002 9.992L9.51277 11.282L8.93827 8.8745L10.8185 7.26425L8.35102 7.06625L7.40002 4.781L6.44902 7.06625L3.98152 7.26425L5.86177 8.8745L5.28727 11.282L7.40002 9.99275V9.992Z\" fill=\"#FFBB3D\"></path>\n                    </svg>\n                    ";
                });
                for (var _i4 = 0; _i4 < 1; _i4++) {
                    array[_i4].innerHTML = "\n                    <svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M7.29998 11.75L2.89148 14.4425L4.08998 9.4175L0.16748 6.0575L5.31623 5.645L7.29998 0.875L9.28373 5.645L14.4332 6.0575L10.51 9.4175L11.7085 14.4425L7.29998 11.75Z\" fill=\"#FFBB3D\"/>\n                    </svg>\n                ";
                }
                marks.dataset.marks = "1";
            }
        });
    });
}

(0, _formValidChecker2.default)(reviewComment);

reviewSubmitBtn.addEventListener("click", function (e) {
    if (reviewComment.value == "") {
        e.preventDefault();
        reviewComment.classList.add("invalid__input");
    } else {
        e.preventDefault();
        (0, _openPopup2.default)(popupWindow, "Отзыв отправлен");
    }
});

fillStarMark(politenessBtns, "data-politeness", politenessMarks);
fillStarMark(punctualityBtns, "data-punctuality", punctualityMarks);
fillStarMark(adequacyBtns, "data-adequacy", adequacyMarks);

},{"./modules/formValidChecker":1,"./modules/openPopup":2}]},{},[3]);
