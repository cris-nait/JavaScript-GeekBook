const geekGirl1 = {
  name: "Susana",
  age: "34",
  occupation: "periodista",
};
const geekGirl2 = {
  name: "Rocio",
  age: "25",
  occupation: "actriz",
};
const content = `
<p>${geekGirl1.name}, ${geekGirl1.age} años, ${geekGirl1.occupation}.</p>
<p>${geekGirl2.name}, ${geekGirl2.age} años, ${geekGirl2.occupation}.</p>
`;
document.getElementById("container").innerHTML = content;
