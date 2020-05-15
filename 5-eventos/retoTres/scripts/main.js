const text = document.querySelector(".text");

text.addEventListener("mouseover", () => {
  return (text.innerHTML = `
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
  sapiente aliquam possimus doloribus nulla laboriosam recusandae facilis
  enim delectus vero.</p>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
        sapiente aliquam possimus doloribus nulla laboriosam recusandae facilis
        enim delectus vero.
      </p>
    `);
});
