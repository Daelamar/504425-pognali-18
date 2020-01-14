"use strict";

(function () {
    var header = document.querySelector(".main-header");
    var openButton = header.querySelector(".main-header__button");

    header.classList.remove("main-header--no-js");
    header.classList.remove("main-header--open");

    var showMenuHandler = function () {
      if (!header.classList.contains("main-header--open")) {
        header.classList.add("main-header--open");
      } else {
        header.classList.remove("main-header--open");
      }
    };

    openButton.addEventListener("click", showMenuHandler);
  }()
);
