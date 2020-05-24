const btn_update = document.getElementById("btn");

const status = {
  current: "",
  getRandomInt: function () {
    return Math.floor(Math.random() * (100 - 1)) + 1;
  },
};

function print() {
  let value = document.getElementById("selector").value;
  let status_container = document.getElementById("status_container");
  let body = document.getElementById("body");
  console.log(value);
  value == "sad" ? (status.current = ":(") : (status.current = ":)");
  console.log(status.current);
  status_container.innerHTML = status.current;
  status.getRandomInt() % 2 == 0
    ? body.classList.remove("bg-change")
    : body.classList.add("bg-change");
}
btn_update.addEventListener("click", print);
