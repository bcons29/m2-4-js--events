const fstDiv = document.getElementById("fstDiv");

function colorGreen(event) {
  const buttonId = event.target.id;
  document.getElementById(buttonId).classList.add("green");
}

for (let x = 0; x <= 20; x++) {
  const button = document.createElement("button");
  button.innerText = x;
  button.id = `btn-${x}`;
  fstDiv.appendChild(button);

  button.addEventListener("click", colorGreen);
}
