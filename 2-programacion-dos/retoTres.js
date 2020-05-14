// Declaramos las variables por Kg de cada fruta
const priceKiwisXKg = Number('5');
const pricePerasConferenciaXKg = Number ('2');
const priceUvasXKg = Number ('4');

//Declaramos las variables de cantidad comprada por cada fruta
const cuKiwis = Number('2');
const cuPerasConferencia = Number('3');
const cuUvas = Number('0.5');

//calculamos el valor total de la compra multiplicando el precio por la cantidad y sumandolo
const value = ((priceKiwisXKg*cuKiwis)+(pricePerasConferenciaXKg*cuPerasConferencia)+(priceUvasXKg*cuUvas));

//Retornamos el valor Total de la compra por la consola
console.log('Valor total: ',value);