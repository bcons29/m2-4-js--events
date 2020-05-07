// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------
// const res = document.getElementsByClassName("result");
const body1 = document.querySelector("body");
const result = document.getElementById("result");

let winner = false;

function clickEvent() {
  winner = true;
  result.innerText = "winner";
  body1.removeEventListener("click", clickEvent);
}

setTimeout(function () {
  if (!winner) {
    result.innerText = "loser";
    body1.removeEventListener("click", clickEvent);
  }
}, 3000);

body1.addEventListener("click", clickEvent);
