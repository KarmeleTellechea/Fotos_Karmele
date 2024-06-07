const condiciones  = document.getElementById("condiciones");
const enviar = document.getElementById("enviar");
const cambiarCondiciones = () => condiciones.checked ? enviar.disabled = false : enviar.disabled = true

    function pop(title, text) {
        document.getElementById("poptitle").innerHTML = title;
        document.getElementById("poptext").innerHTML = text;
        document.getElementById("popwrap").classList.add('show');
    }
    
    function hidePop() {
        document.getElementById("popwrap").classList.remove('show');
    }