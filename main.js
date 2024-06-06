const condiciones  = document.getElementById("condiciones");
const enviar = document.getElementById("enviar");

const cambiarCondiciones = () => condiciones.checked ? enviar.disabled = false : enviar.disabled = true