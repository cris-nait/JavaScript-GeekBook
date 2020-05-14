const notification = document.querySelector(".notification");

const successMsg = `
<h1>CORRECTO</h1>
<p>Los datos han sido correctos</p>`;
const warningMsg = `
<h1>AVISO</h1>
<p>Tenga cuidado</p>`;
const errorMsg = `
<h1>ERROR</h1>
<p>Ha surgido un error</p>`;

if (notification.classList.contains("success")) {
  notification.innerHTML = successMsg;
} else if (notification.classList.contains("error")) {
  notification.innerHTML = errorMsg;
} else if (notification.classList.contains("warning")) {
  notification.innerHTML = warningMsg;
}
