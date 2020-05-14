const year = 2019;
const value =
  year % 4 == 0
    ? console.log("Felicidades estás en un año bisiesto")
    : console.log(`El siguiente año bisiesto es ${year + (4 - (year % 4))} `);
