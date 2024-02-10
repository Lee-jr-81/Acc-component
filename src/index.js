"use strict";

// Select the elements
const first = document.getElementById("para1");
const second = document.getElementById("para2");
const third = document.getElementById("para3");
const fourth = document.getElementById("para4");

// Add the event
document.querySelectorAll("button").forEach((button, index) => {
  button.onclick = (event) => {
    switch (index) {
      case 0:
        first.classList.toggle("hidden");
        break;
      case 1:
        second.classList.toggle("hidden");
        break;
      case 2:
        third.classList.toggle("hidden");
        break;
      case 3:
        fourth.classList.toggle("hidden");
        break;
    }
  };
});
