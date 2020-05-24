let btn = document.getElementById("btn_submit");

const print = () => {
  const txt1 = document.getElementById("work1").value;
  const txt2 = document.getElementById("work2").value;
  let arr = [txt1, txt2];
  for (const iterator of arr) {
    console.log(
      `¡A mí también me encantó "${iterator}"! Tenemos mucho en común, humana.`
    );
  }
};

btn.addEventListener("click", print);
