"use strict";

(function () {
  var userBlock = document.querySelector(".user-block");
  var userBlockTags = userBlock.querySelector(".user-block__tags");
  var userBlockInput = userBlockTags.querySelector(".user-block__textarea");

  var focusHandler = function () {
    userBlockTags.classList.add("user-block__tags--active");
    userBlockInput.addEventListener("focusout", unFocusHandler);
  };

  var unFocusHandler = function () {
    userBlockTags.classList.remove("user-block__tags--active");
    userBlockInput.addEventListener("focusin", focusHandler);
  };

  userBlockInput.addEventListener("focusin", focusHandler);
  userBlockInput.addEventListener("focusout", unFocusHandler);
}());


