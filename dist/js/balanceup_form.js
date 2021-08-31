(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var cardNum = document.querySelector(".balance-up__card-num"),
    cardMonth = document.querySelector(".balance-up__card-month"),
    cardYear = document.querySelector(".balance-up__card-year"),
    cardCvc = document.querySelector(".balance-up__card-cvc"),
    topUpSum = document.querySelector(".balance-up__sum"),
    topUpBtn = document.querySelector(".balance-up__btn"),
    allInputs = document.querySelectorAll("input"),
    topUpPopup = document.querySelector(".balance-up__popup");

cardNum.addEventListener("input", function (e) {

    if (e.inputType != "deleteContentBackward") {
        if (cardNum.value.length == "4" || cardNum.value.length == "9" || cardNum.value.length == "14") {
            cardNum.value = cardNum.value + " ";
        }
    }
});

cardYear.addEventListener("input", function (e) {
    if (cardYear.value <= "20") {
        cardYear.classList.remove("valid__input");
        cardYear.classList.add("invalid__input");
    } else if (cardYear.validity.valid == true) {
        cardYear.classList.remove("invalid__input");
        cardYear.classList.add("valid__input");
    }
});

function validChecer(input) {
    input.addEventListener("keydown", function () {
        if (input.validity.valid == true) {
            input.classList.remove("invalid__input");
            input.classList.add("valid__input");
        }
    });
}
function inputValueChecker(input) {
    input.addEventListener("blur", function () {
        if (input.value.trim() == "" || input.value.trim() == 0) {
            input.classList.remove("valid__input");
            input.classList.add("invalid__input");
        }
    });
}

validChecer(cardNum);
inputValueChecker(cardNum);

inputValueChecker(cardYear);

validChecer(cardMonth);
inputValueChecker(cardMonth);

validChecer(cardCvc);
inputValueChecker(cardCvc);

validChecer(topUpSum);
inputValueChecker(topUpSum);

topUpBtn.addEventListener("click", function (e) {
    allInputs.forEach(function (input) {
        if (input.classList.contains("invalid__input")) {
            e.preventDefault();
        } else if (input.classList.contains("valid__input")) {
            e.preventDefault();
            topUpPopup.style.display = "flex";
            topUpPopup.classList.add("animate__bounceInDown");
        }
    });
});

},{}]},{},[1]);
