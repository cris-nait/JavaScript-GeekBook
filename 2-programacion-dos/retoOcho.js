'use strict';

const div = document.querySelector('#div');
const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

div.innerHTML=`
<li><img src="${firstDogImage}"     alt=""><p>${firstDogName}</p></li>
<li><img src="${secondDogImage}"    alt=""><p>${secondDogName}</p></li>
<li><img src="${thirdDogImage}"     alt=""><p>${thirdDogName}</p></li>
`;