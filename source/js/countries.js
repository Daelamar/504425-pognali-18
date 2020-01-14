"use strict";

(function () {
    var countries = document.querySelector(".countries");
    var countriesButton = document.querySelector(".countries__roll");
    var countriesClose = document.querySelector(".countries__close");

    countriesButton.addEventListener("click", function () {
      countries.classList.toggle("countries--open")
    });

    countriesClose.addEventListener("click", function () {
      countries.classList.remove("countries--open")
    })
  }()
);
