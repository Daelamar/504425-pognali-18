"use strict";

(function () {
    var popupShow = document.querySelector(".tariff__button");
    var popup = document.querySelector(".business");
    var popupClose = document.querySelector(".business__button");

    popupShow.addEventListener("click", function () {
      popup.classList.add("business--open")
    });
    popupClose.addEventListener("click", function () {
      popup.classList.remove("business--open")
    });
  }()
);
