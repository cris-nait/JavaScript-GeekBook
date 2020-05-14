'use strict';

const people = Number('9');
const total = Number('128');
const ana = Number('2');
// Se calcula el total teniendo en cuenta que Ana debe pagar 2 euros más.
const totalValue = ((total-ana)/people);
console.log('Cada uno paga: ', totalValue,('€ y Ana paga:'),totalValue+ana,('€'));