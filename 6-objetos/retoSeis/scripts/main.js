const btn = document.getElementById("btn_container");

let counter = {
  initial: 1,
  max: 10,
  min: 1,
  current: 1,
  increase: function () {
    this.current < this.max ? this.current++ : alert("Se llegó al limite");
  },
  decrease: function () {
    this.current > this.min ? this.current-- : alert("Se llegó minimo");
  },
  reset: function () {
    this.current = this.initial;
    alert("Se reinició el contador");
  },
};

const print = (event) => {
  switch (event.target.id) {
    case "increase":
      counter.increase();
      break;
    case "decrease":
      counter.decrease();
      break;
    case "reset":
      counter.reset();
      break;

    default:
      break;
  }
  document.getElementById("number_counter").innerHTML = counter.current;
};
btn.addEventListener("click", print);
