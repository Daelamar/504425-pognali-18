"use strict";

(function () {
    var dropdownShowAll = document.querySelectorAll(".second-step__fade");
    var dropdown = document.querySelector(".dropdown");
    var popupClose = document.querySelector(".dropdown__close");

    var dropdownOpen = function () {
      for (var i = 0; i < dropdownShowAll.length; i++) {
        var dropdownShow = dropdownShowAll[i];
        dropdownShow.addEventListener("click", function (evt) {
          evt.preventDefault();
          dropdown.classList.add("dropdown--open");
        });
      }
    };
    dropdownOpen();
    popupClose.addEventListener("click", function () {
      dropdown.classList.remove("dropdown--open");
    });
  }()
);
