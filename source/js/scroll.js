"use strict";

(function () {
    var header = document.querySelector(".main-header");

    var scrollMenuHandler = function () {
      if (!header.classList.contains("main-header--open")) {
        if (window.pageYOffset > 710 && window.innerWidth >= 1440 || window.pageYOffset > 0 && window.innerWidth < 1440) {
          header.classList.add("main-header--scroll");
        } else {
          header.classList.remove("main-header--scroll");
        }
      }
    };
    window.addEventListener("scroll", scrollMenuHandler);
  }()
);
