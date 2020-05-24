const selector = (event) => {
  event.currentTarget.classList.toggle("teacher--selected");
  var element = event.currentTarget.querySelector(".favorite");
  element.innerHTML === "Añadir"
    ? (element.innerHTML = "Quitar")
    : (element.innerHTML = "Añadir");
};
document.querySelector(".teacher--isra").addEventListener("click", selector);
document.querySelector(".teacher--tuerto").addEventListener("click", selector);
document.querySelector(".teacher--nasi").addEventListener("click", selector);
