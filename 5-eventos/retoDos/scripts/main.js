const btn = document.querySelector(".btn");

btn.addEventListener(
  "click",
  (printOnConsole = () => {
    return console.log(`Hola ${document.querySelector("#name").value}`);
  })
);
