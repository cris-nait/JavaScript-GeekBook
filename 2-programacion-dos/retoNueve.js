'use strict';
const title = document.querySelector('#title');
const name = 'Ana María';

title.innerHTML =`
    <h1>El nombre de mi compañera es ${name}, y está compuesto por ${name.length-1} caracteres</h1>
`;