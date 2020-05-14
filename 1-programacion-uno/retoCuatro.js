'use strict';

/*
Obtenemos el elemento con el que queremos trabajar usando
document.querySelector()
*/
var titleElement = document.querySelector('#title');
const liElement = document.querySelector('#name2');

// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
titleElement.innerHTML = titleElement.innerHTML + liElement.innerHTML;