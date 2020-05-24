const geekGirl1 = {
  name: "Susana",
  age: "34",
  occupation: "periodista",
  run: () => {
    console.log("Estoy corriendo!");
  },
};
geekGirl1.showBio = function showbio() {
  return alert(
    `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.occupation}`
  );
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
geekGirl2.showBio = function showbio() {
  return alert(
    `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.occupation}`
  );
};
const content = `
<p>${geekGirl1.name}, ${geekGirl1.age} años, ${
  geekGirl1.occupation
}.${geekGirl1.run()}${geekGirl1.showBio}</p>
<p>${geekGirl2.name}, ${geekGirl2.age} años, ${
  geekGirl2.occupation
}.${geekGirl2.runAMarathon(50)}</p>
`;
document.getElementById("container").innerHTML = content;
