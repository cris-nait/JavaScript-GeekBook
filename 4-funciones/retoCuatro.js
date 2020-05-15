const widthOfBox = (typeOfBox, width, padding, border) => {
  if (typeOfBox == true) {
    return console.log(width - padding * 2 - border * 2);
  } else {
    return console.log(width + padding * 2 + border * 2);
  }
};

widthOfBox(true, 100, 10, 10);
