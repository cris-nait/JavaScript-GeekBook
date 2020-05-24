let geekGirls = [
  { name: "María", age: 29, ocuppation: "diseñadora" },
  { name: "Lucía", age: 31, ocuppation: "ingeniera química" },
  { name: "Susana", age: 34, ocuppation: "periodista" },
  { name: "Rocío", age: 25, ocuppation: "actriz" },
  { name: "Inmaculada", age: 21, ocuppation: "diseñadora" },
];

const countGeekGirls = (arr) => {
  return arr.length;
};
const averageAge = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].age;
  }
  return sum / arr.length;
};
const theYoungest = (arr) => {
  let youngest = "";
  let sum = 100;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < sum) {
      sum = arr[i].age;
      youngest = arr[i].name;
    }
  }
  return youngest;
};
const countDesigners = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i].ocuppation.includes("diseñadora") ? sum++ : (sum = sum);
  }
  return sum;
};

console.log(countGeekGirls(geekGirls));
console.log(averageAge(geekGirls));
console.log(theYoungest(geekGirls));
console.log(countDesigners(geekGirls));
