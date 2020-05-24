const changeColor = (event) => {
  const body = document.querySelector("body");
  if (event.key === "r") {
    body.classList.add("red");
    body.classList.replace("purple", "red");
  } else if (event.key === "m") {
    body.classList.add("purple");
    body.classList.replace("red", "purple");
  }
};
document.addEventListener("keypress", changeColor);
