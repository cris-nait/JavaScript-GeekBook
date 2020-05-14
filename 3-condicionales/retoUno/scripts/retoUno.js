const avatarBox = document.querySelector("#avatarBox");

const defaultAvatar = "http://placehold.it/300x300";
var userAvatar = "http://www.fillmurray.com/300/300";

document.getElementById("avatarBox").innerHTML = `
<img src="${userAvatar || defaultAvatar}" alt="">
`;
