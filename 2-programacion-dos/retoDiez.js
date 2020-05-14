'use strict';

const age = document.querySelector('#userAge').innerText;
const value = parseInt(age)*365*24;

console.log(`Las horas vividas son: ${value}`);