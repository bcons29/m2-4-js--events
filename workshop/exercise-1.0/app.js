// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, add some text to the page.

// Hints:
// - Target the <body>
// - By default, the <body> will be 0px tall. You can add a style in the
//   `<style>` tags to fill the viewport height.

// OPTIONAL
// Feel free to add some CSS to this once you're done
// ------------------------------------------------

const body = document.querySelector("body");
const p1 = document.createElement("p");

body.addEventListener("click", clickEvent);

function clickEvent() {
  p1.innerText = "HELLO JELLO !!";
  body.removeEventListener("click", clickEvent);
}
document.body.appendChild(p1);
