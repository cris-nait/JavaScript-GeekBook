let numbers = [2, 4, 1, 1, 5, 10];

let average = (arr) => {
  let acc = 0;
  for (let index = 0; index < arr.length; index++) {
    acc += arr[index];
  }
  console.log(acc / arr.length);
};

average(numbers);
