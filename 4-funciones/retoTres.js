function iva(value) {
  return console.log(
    `Precio sin IVA: ${value}, IVA: ${value * 0.21} y Total: ${
      value * 0.21 + value
    }`
  );
}
iva(12000);
