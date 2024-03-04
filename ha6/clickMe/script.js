const button = document.querySelector(".my-button");

button.addEventListener("mouseover", moveButtonOnHover);
button.addEventListener("click", moveButtonOnClick);

function returnTrueOrFalse() {
  let random = Math.random();
  if (random < 0.5) {
    return true;
  } else {
    return false;
  }
}

function moveButtonOnHover() {
  const screenWidth = window.innerWidth - button.offsetWidth;
  const screenHeight = window.innerHeight - button.offsetHeight;

  const randomX = Math.floor(Math.random() * screenWidth);
  const randomY = Math.floor(Math.random() * screenHeight);
  if (returnTrueOrFalse()) {
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
  }
}

function moveButtonOnClick() {
  const screenWidth = window.innerWidth - button.offsetWidth;
  const screenHeight = window.innerHeight - button.offsetHeight;

  const randomX = Math.floor(Math.random() * screenWidth);
  const randomY = Math.floor(Math.random() * screenHeight);

  button.style.left = randomX + "px";
  button.style.top = randomY + "px";
}
