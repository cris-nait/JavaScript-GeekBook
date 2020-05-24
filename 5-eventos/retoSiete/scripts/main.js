const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";
const btn = document.getElementById("btn_empezar");

const handleFunc = (event) => {
  console.log(event.target);
};

const print = () => {
  document.getElementById("list_container").innerHTML = `
    <ul id="list">
      <li class="element" id="inception">${inception}</li>
      <li class="element" id="theButterFlyEffect">${theButterFlyEffect}</li>
      <li class="element" id="eternalSunshineOfTheSM">${eternalSunshineOfTheSM}</li>
      <li class="element" id="blueVelvet"${blueVelvet}</li>
      <li class="element" id="split">${split}</li>
    </ul>
    `;
  //Se inician los listeners
  document.getElementById("list").addEventListener("click", handleFunc);
};
btn.addEventListener("click", print);
