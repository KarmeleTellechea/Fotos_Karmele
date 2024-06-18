// Autenticación
const urlauth = new URLSearchParams(window.location.search);
const authen = urlauth.get('auth');
console.log(authen);
if (!authen) {
    alert('Tramposo');
    window.location = 'index.html';
}

// Cambio de títulos
function updateHeader(selectElement, category) {
    const subcategory = selectElement.options[selectElement.selectedIndex].value;
    document.getElementById('categorias').innerText = category;
    document.getElementById('subcategoria').innerText = subcategory;
}

// Cambio de imágenes
document.addEventListener('DOMContentLoaded', () => {
    const selectAnimales = document.getElementById('animales');
    const selectPersonas = document.getElementById('personas');
    const selectNatura = document.getElementById('natura');
    const imageContainer = document.getElementById('image-container');

    // Fetch de imágenes
    fetch('script /db.json')
        .then(response => response.json())
        .then(data => {
         
            const imagePaths = {
                perros: data.perros[0],
                gatos: data.gatos[0],
                otros: data.otros[0],
                femenino: data.femenino[0],
                masculino: data.masculino[0],
                playa: data.playa[0],
                bosque: data.bosque[0]
            };
            console.log(imagePaths)

            // Función para mostrar imágenes
            function showImages(category) {
                imageContainer.innerHTML = '';

                if (category && imagePaths[category]) {
                    Object.values(imagePaths[category]).forEach(src => {
                        const img = document.createElement('img');
                        img.src = src;
                        img.alt = category;

                        const div = document.createElement('div');
                        div.classList.add('container');
                        div.appendChild(img);

                        imageContainer.appendChild(div);
                    });
                }
            }

            // Event Listeners para los select elements
            selectAnimales.addEventListener('change', () => showImages(selectAnimales.value));
            selectPersonas.addEventListener('change', () => showImages(selectPersonas.value));
            selectNatura.addEventListener('change', () => showImages(selectNatura.value));
        })
        .catch(error => console.error('Error fetching the JSON:', error));
});