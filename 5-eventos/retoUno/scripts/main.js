const btn = document.querySelector(".btn");
const text = `<p>Que chimba, mi primer click</p>
`;

btn.addEventListener("click", () => {
  return (document.querySelector("#text").innerHTML = text);
});
