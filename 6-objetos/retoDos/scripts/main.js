const geekGirl1 = {
  name: "Susana",
  age: "34",
  occupation: "periodista",
  run: () => {
    console.log("Estoy corriendo!");
  },
};
const geekGirl2 = {
  name: "Rocio",
  age: "25",
  occupation: "actriz",
  occupation: "periodista",
  runAMarathon: (distance) => {
    console.log(`Estoy corriendo una maraton de ${distance} Kilómetros!`);
  },
};
const content = `
<p>${geekGirl1.name}, ${geekGirl1.age} años, ${
  geekGirl1.occupation
}.${geekGirl1.run()}</p>
<p>${geekGirl2.name}, ${geekGirl2.age} años, ${
  geekGirl2.occupation
}.${geekGirl2.runAMarathon(50)}</p>
`;
document.getElementById("container").innerHTML = content;
