const input = document.getElementById("txt_input");

const print = () => {
  console.dir(input);
};

input.addEventListener("keypress", print);
