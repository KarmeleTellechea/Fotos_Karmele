
//funcion boton 1- disabled y cheked y location nuevo
const condiciones  = document.getElementById("condiciones");
const enviar = document.getElementById("enviar");

const cambiarCondiciones = () => { enviar.disabled = !condiciones.checked;};

condiciones.addEventListener('change', cambiarCondiciones);

enviar.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'fotos.html';
});

// Funcion POPUP
    function pop(title, text) {
        document.getElementById("poptitle").innerHTML = title;
        document.getElementById("poptext").innerHTML = text;
        document.getElementById("popwrap").classList.add('show');
    }
    
    function hidePop() {
        document.getElementById("popwrap").classList.remove('show');
    }

        