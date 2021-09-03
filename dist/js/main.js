(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _openSideMenu = require('./modules/openSideMenu');

var _openSideMenu2 = _interopRequireDefault(_openSideMenu);

var _headerMobileAnimetion = require('./modules/headerMobileAnimetion');

var _headerMobileAnimetion2 = _interopRequireDefault(_headerMobileAnimetion);

var _renderTasks = require('./modules/renderTasks');

var _renderTasks2 = _interopRequireDefault(_renderTasks);

var _showByGameName = require('./modules/showByGameName');

var _showByGameName2 = _interopRequireDefault(_showByGameName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showMoreBtn = document.querySelector(".task__more-btn");
var dota2filterBtn = document.querySelector('button[data-gamename="dota2"]');
var csgofilterBtn = document.querySelector('button[data-gamename="csgo"]');
var wotfilterBtn = document.querySelector('button[data-gamename="wot"]');
var heartStonefilterBtn = document.querySelector('button[data-gamename="hearthstone"]');
var warFacefilterBtn = document.querySelector('button[data-gamename="warface"]');
var LolfilterBtn = document.querySelector('button[data-gamename="lol"]');
var pubgfilterBtn = document.querySelector('button[data-gamename="pubg"]');
var minecraftfilterBtn = document.querySelector('button[data-gamename="minecraft"]');
var taskForm = document.querySelector(".task__filter");
var hiddenCheckbox = document.querySelector(".task__checkbox");
var customCheckbox = document.querySelector(".task__custom-checkbox");
var taskList = document.querySelector(".task__list");
var taskFiterBtns = document.querySelectorAll(".task__games-btn");

(0, _showByGameName2.default)(dota2filterBtn, "dota2");
(0, _showByGameName2.default)(csgofilterBtn, "csgo");
(0, _showByGameName2.default)(wotfilterBtn, "wot");
(0, _showByGameName2.default)(pubgfilterBtn, "pubg");
(0, _showByGameName2.default)(heartStonefilterBtn, "heartstone");
(0, _showByGameName2.default)(LolfilterBtn, "lol");
(0, _showByGameName2.default)(minecraftfilterBtn, "minecraft");
(0, _showByGameName2.default)(warFacefilterBtn, "warface");

window.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 426) {
        (0, _openSideMenu2.default)(".mobile-header__menu", ".side-menu__close-btn", ".side-menu");
        (0, _headerMobileAnimetion2.default)();
    }
    showMoreBtn.addEventListener("click", function () {
        (0, _renderTasks2.default)();
    });

    if (window.innerWidth > 1200) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 400) {
                taskForm.classList.add("task__filter--fixed");
                taskForm.firstElementChild.classList.add("page__container");
            } else if (window.scrollY < 400) {
                taskForm.classList.remove("task__filter--fixed");
                taskForm.firstElementChild.classList.remove("page__container");
            }
        });
    }
});

hiddenCheckbox.addEventListener("input", function () {
    customCheckbox.classList.toggle("task__custom-checkbox--checked");
    if (customCheckbox.classList.contains("task__custom-checkbox--checked")) {
        var taskItems = taskList.querySelectorAll("li");
        taskItems.forEach(function (item) {
            item.style.display = "block";
        });
        taskFiterBtns.forEach(function (btn) {
            btn.classList.remove("active");
        });
    }
});

},{"./modules/headerMobileAnimetion":2,"./modules/openSideMenu":3,"./modules/renderTasks":4,"./modules/showByGameName":5}],2:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var renderTasks = function renderTasks() {
    var taskList = document.querySelector(".task__list");
    var taskItemsList = [{
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "dota2",
        mobileImg: "../img/dota2-mini.png",
        desktopImg: "../img/dota2.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "csgo",
        mobileImg: "../img/csgo-mini.png",
        desktopImg: "../img/CS.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "wot",
        mobileImg: "../img/wot-mini.png",
        desktopImg: "../img/WOT.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "pubg",
        mobileImg: "../img/pubg-mini.png",
        desktopImg: "../img/PUBG.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "heartstone",
        mobileImg: "./img/hearth-stone-mini.png",
        desktopImg: "../img/hearth-stone.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "lol",
        mobileImg: "../img/lol-mini.png",
        desktopImg: "../img/LOL.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "minecraft",
        mobileImg: "../img/minecraft-mini.png",
        desktopImg: "../img/Minecraft.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "warface",
        mobileImg: "../img/warface-mini.png",
        desktopImg: "../img/Warface.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "dota2",
        mobileImg: "../img/dota2-mini.png",
        desktopImg: "../img/dota2.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "csgo",
        mobileImg: "../img/csgo-mini.png",
        desktopImg: "../img/CS.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "wot",
        mobileImg: "../img/wot-mini.png",
        desktopImg: "../img/WOT.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "pubg",
        mobileImg: "../img/pubg-mini.png",
        desktopImg: "../img/PUBG.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "heartstone",
        mobileImg: "./img/hearth-stone-mini.png",
        desktopImg: "../img/hearth-stone.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "lol",
        mobileImg: "../img/lol-mini.png",
        desktopImg: "../img/LOL.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "minecraft",
        mobileImg: "../img/minecraft-mini.png",
        desktopImg: "../img/Minecraft.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "warface",
        mobileImg: "../img/warface-mini.png",
        desktopImg: "../img/Warface.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "dota2",
        mobileImg: "../img/dota2-mini.png",
        desktopImg: "../img/dota2.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "csgo",
        mobileImg: "../img/csgo-mini.png",
        desktopImg: "../img/CS.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "wot",
        mobileImg: "../img/wot-mini.png",
        desktopImg: "../img/WOT.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "pubg",
        mobileImg: "../img/pubg-mini.png",
        desktopImg: "../img/PUBG.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "heartstone",
        mobileImg: "./img/hearth-stone-mini.png",
        desktopImg: "../img/hearth-stone.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "lol",
        mobileImg: "../img/lol-mini.png",
        desktopImg: "../img/LOL.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "minecraft",
        mobileImg: "../img/minecraft-mini.png",
        desktopImg: "../img/Minecraft.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "warface",
        mobileImg: "../img/warface-mini.png",
        desktopImg: "../img/Warface.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "dota2",
        mobileImg: "../img/dota2-mini.png",
        desktopImg: "../img/dota2.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "csgo",
        mobileImg: "../img/csgo-mini.png",
        desktopImg: "../img/CS.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "wot",
        mobileImg: "../img/wot-mini.png",
        desktopImg: "../img/WOT.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "pubg",
        mobileImg: "../img/pubg-mini.png",
        desktopImg: "../img/PUBG.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "heartstone",
        mobileImg: "./img/hearth-stone-mini.png",
        desktopImg: "../img/hearth-stone.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "lol",
        mobileImg: "../img/lol-mini.png",
        desktopImg: "../img/LOL.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "minecraft",
        mobileImg: "../img/minecraft-mini.png",
        desktopImg: "../img/Minecraft.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "warface",
        mobileImg: "../img/warface-mini.png",
        desktopImg: "../img/Warface.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "dota2",
        mobileImg: "../img/dota2-mini.png",
        desktopImg: "../img/dota2.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "csgo",
        mobileImg: "../img/csgo-mini.png",
        desktopImg: "../img/CS.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "wot",
        mobileImg: "../img/wot-mini.png",
        desktopImg: "../img/WOT.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "pubg",
        mobileImg: "../img/pubg-mini.png",
        desktopImg: "../img/PUBG.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "heartstone",
        mobileImg: "./img/hearth-stone-mini.png",
        desktopImg: "../img/hearth-stone.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "lol",
        mobileImg: "../img/lol-mini.png",
        desktopImg: "../img/LOL.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "minecraft",
        mobileImg: "../img/minecraft-mini.png",
        desktopImg: "../img/Minecraft.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }, {
        title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
        gameName: "warface",
        mobileImg: "../img/warface-mini.png",
        desktopImg: "../img/Warface.png",
        price: "1000 сом",
        view: "562",
        offer: "0"
    }];
    function render() {
        taskItemsList.forEach(function (task) {
            var taskItem = document.createElement("li");
            taskItem.classList.add("task__item");
            taskItem.dataset.game = task.gameName;
            taskItem.innerHTML = "\n             <a href=\"../pages/fighting_response_1x1.html\" class=\"task__link\">\n                <img src=\"" + task.mobileImg + "\" alt=\"user-image\" class=\"task__mobile-img\">\n                <div class=\"task__descr\">\n                    <h2 class=\"task__title\"" + task.title + "</h2>\n                    <img src=\"" + task.desktopImg + "\" alt=\"user-image\" class=\"task__desktop-img\">\n                    <p class=\"task__date\">\u0418\u0433\u0440\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F: <span class=\"task__date-time\">20:00, 05.06.21</span></p>\n                    <p class=\"task__bet\">\u0421\u0442\u0430\u0432\u043A\u0430: <span class=\"task__bet-price\">" + task.price + "</span></p>\n                    <div class=\"task__info\">\n                        <span class=\"task__views\">\n                            <svg class=\"task__views-icon task__info-icons\" width=\"18\" height=\"14\" viewBox=\"0 0 18 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M8.99999 0.25C13.044 0.25 16.4085 3.16 17.1142 7C16.4092 10.84 13.044 13.75 8.99999 13.75C4.95599 13.75 1.59149 10.84 0.885742 7C1.59074 3.16 4.95599 0.25 8.99999 0.25ZM8.99999 12.25C10.5296 12.2497 12.0138 11.7301 13.2096 10.7764C14.4055 9.82264 15.2422 8.49121 15.5827 7C15.2409 5.50998 14.4037 4.18 13.208 3.22752C12.0122 2.27504 10.5287 1.7564 8.99999 1.7564C7.47126 1.7564 5.98776 2.27504 4.79202 3.22752C3.59629 4.18 2.75907 5.50998 2.41724 7C2.75781 8.49121 3.5945 9.82264 4.79035 10.7764C5.9862 11.7301 7.47039 12.2497 8.99999 12.25ZM8.99999 10.375C8.10489 10.375 7.24644 10.0194 6.61351 9.38649C5.98057 8.75355 5.62499 7.89511 5.62499 7C5.62499 6.10489 5.98057 5.24645 6.61351 4.61351C7.24644 3.98058 8.10489 3.625 8.99999 3.625C9.8951 3.625 10.7535 3.98058 11.3865 4.61351C12.0194 5.24645 12.375 6.10489 12.375 7C12.375 7.89511 12.0194 8.75355 11.3865 9.38649C10.7535 10.0194 9.8951 10.375 8.99999 10.375ZM8.99999 8.875C9.49727 8.875 9.97419 8.67746 10.3258 8.32582C10.6774 7.97419 10.875 7.49728 10.875 7C10.875 6.50272 10.6774 6.02581 10.3258 5.67417C9.97419 5.32254 9.49727 5.125 8.99999 5.125C8.50271 5.125 8.0258 5.32254 7.67417 5.67417C7.32254 6.02581 7.12499 6.50272 7.12499 7C7.12499 7.49728 7.32254 7.97419 7.67417 8.32582C8.0258 8.67746 8.50271 8.875 8.99999 8.875Z\" fill=\"#E4E4E4\"/>\n                            </svg>\n                            <span class=\"task__views-num\">" + task.view + "</span>\n                            \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u043E\u0432\n                        </span>\n                        <span class=\"task__offers\">\n                            <svg class=\"task__offers-icon task__info-icons\" width=\"16\" height=\"12\" viewBox=\"0 0 16 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M8.25 12L0.75 6L8.25 0V3.75C12.3923 3.75 15.75 7.10775 15.75 11.25C15.75 11.4548 15.7425 11.6572 15.726 11.8575C14.6287 9.777 12.4785 8.33925 9.98475 8.25375L9.75 8.25H8.25V12ZM6.75 6.75H9.7755L10.0357 6.75525C10.9995 6.7875 11.9287 6.98775 12.7927 7.32975C11.6925 6.05625 10.065 5.25 8.25 5.25H6.75V3.12075L3.1515 6L6.75 8.87925V6.75Z\" fill=\"#E4E4E4\"/>\n                            </svg>\n                            <span class=\"task__offers-num\">" + task.view + "</span>\n                            \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439\n                        </span>\n                    </div>\n                </div>\n            </a>\n             ";
            taskList.appendChild(taskItem);
        });
    };
    render();
};
exports.default = renderTasks;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var showByGameName = function showByGameName(btn, gameName) {
    btn.addEventListener("click", function (e) {
        var taskList = document.querySelector(".task__list");
        var taskItems = taskList.querySelectorAll("li");
        var filterbtns = document.querySelectorAll(".task__games-btn");
        filterbtns.forEach(function (btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        taskItems.forEach(function (item) {

            if (item.dataset.game != gameName) {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        });
    });
};
exports.default = showByGameName;

},{}]},{},[1]);
