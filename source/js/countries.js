"use strict";

(function () {
    var countries = document.querySelector(".countries");
    var countriesButton = document.querySelector(".countries__roll");

    countriesButton.addEventListener("click", function () {
      countries.classList.toggle("countries--open")
    })
  }()
);
