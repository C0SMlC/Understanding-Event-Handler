"use strict";

const section = document.querySelector(".sec");
const div = document.querySelector(".div");
const paragraph = document.querySelector(".pr");

const randomgen = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

paragraph.addEventListener("click", function (e) {
  paragraph.style.backgroundColor = `rgb(
    ${randomgen(0, 255)},
    ${randomgen(0, 255)},
    ${randomgen(0, 255)}
  )`;

  // To stop event listner right here
  e.stopImmediatePropagation();
});

div.addEventListener("click", function (e) {
  div.style.backgroundColor = `rgb(
    ${randomgen(0, 255)},
    ${randomgen(0, 255)},
    ${randomgen(0, 255)}
  )`;
});

section.addEventListener("click", function (e) {
  section.style.backgroundColor = `rgb(
    ${randomgen(0, 255)},
    ${randomgen(0, 255)},
    ${randomgen(0, 255)}
  )`;
});

// IMP =>>> Add Event Listener method will be invoked first in the last child of a parent where event happend
// that is

/*
                               3
                               |
                               2
                               |
                               1    // consider event happend here
 
then the action defined at 1 will be performed first that is in the bubbling phase
// to reverse this behaviour we can provide a third parameter to addwvent listenerr a boolean



*/