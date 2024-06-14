//has pasados por auth??
const urlauth = new URLSearchParams(window.location.search);
const authen = urlauth.get('auth');
console.log(authen);
if (!authen){
    alert('Tramposo')
    window.location = 'index.html';
}

//Cambio de titulos 
function updateHeader(selectElement, category) {
    const subcategory = selectElement.options[selectElement.selectedIndex].value;
    document.getElementById('categorias').innerText = category;
    document.getElementById('subcategoria').innerText = subcategory;
}

// Cambio de imagenes . 
document.addEventListener('DOMContentLoaded', () => {
    const selectAnimales = document.getElementById('animales');
    const selectPersonas = document.getElementById('personas');
    const selectNatura = document.getElementById('natura');
    const imageContainer = document.getElementById('image-container');
// IMAGENES : 
    const imagePaths = {
        perros: [
            'images/perros/perros1.webp', 
            'images/perros/perros2.webp',
            'images/perros/perros3.webp', 
            'images/perros/perros4.webp',
            'images/perros/perros5.webp', 
            'images/perros/perros6.webp',
            'images/perros/perros7.webp', 
            'images/perros/perros8.webp',
            'images/perros/perros9.webp', 
            'images/perros/perros10.webp',
            'images/perros/perros11.webp',
             'images/perros/perros12.webp',
             'images/perros/perros13.webp',
              'images/perros/perros14.webp',
              'images/perros/perros15.webp',
        ],
        gatos: [
            'images/gatos/gatos1.webp',
             'images/gatos/gatos2.webp',
             'images/gatos/gatos3.webp', 
             'images/gatos/gatos4.webp'

        ],
        otros: [
            'images/otros/otros1.webp',
            'images/otros/otros2.webp',
            'images/otros/otros3.webp', 
            'images/otros/otros4.webp', 
            'images/otros/otros5.webp',
            'images/otros/otros6.webp',
            'images/otros/otros7.webp',
            'images/otros/otros8.webp',
            'images/otros/otros9.webp'
        ],
        femenino: [
            'images/femenino/femenino1.webp',
            'images/femenino/femenino2.webp',
            'images/femenino/femenino3.webp',
            'images/femenino/femenino4.webp',
            'images/femenino/femenino5.webp',
            'images/femenino/femenino6.webp',
            'images/femenino/femenino7.webp',
            'images/femenino/femenino8.webp',
            'images/femenino/femenino9.webp',
            'images/femenino/femenino10.webp',
            'images/femenino/femenino11.webp',
            'images/femenino/femenino12.webp',
            'images/femenino/femenino13.webp',
            'images/femenino/femenino14.webp',
            'images/femenino/femenino15.webp',
            'images/femenino/femenino16.webp',
            'images/femenino/femenino17.webp',
            'images/femenino/femenino18.webp'
        ],
        masculino: [
                'images/masculino/masculino1.webp', 
                'images/masculino/masculino2.webp',
                'images/masculino/masculino3.webp',
                'images/masculino/masculino4.webp',
                'images/masculino/masculino5.webp',
                'images/masculino/masculino6.webp',
                'images/masculino/masculino7.webp',
                'images/masculino/masculino8.webp',
                'images/masculino/masculino9.webp',
            ],
        playa: [
            'images/playa/playa1.webp', 
            'images/playa/playa2.webp',
            'images/playa/playa3.webp', 
            'images/playa/playa4.webp',
            'images/playa/playa5.webp', 
            'images/playa/playa6.webp',
            'images/playa/playa7.webp', 
            'images/playa/playa8.webp',
            'images/playa/playa9.webp', 
            'images/playa/playa10.webp',
            'images/playa/playa11.webp', 
            'images/playa/playa12.webp',
        ],
        bosque: [
            'images/bosque/bosque1.webp', 
            'images/bosque/bosque2.webp',
            'images/bosque/bosque3.webp',
            'images/bosque/bosque4.webp',
            'images/bosque/bosque5.webp',
            'images/bosque/bosque6.webp', 
            'images/bosque/bosque7.webp',
            'images/bosque/bosque8.webp',
            'images/bosque/bosque9.webp',
            'images/bosque/bosque10.webp',
            'images/bosque/bosque11.webp',
            'images/bosque/bosque12.webp',
            
        ]
        };

//Funcion ver imagenes

function showImages(category) {
    imageContainer.innerHTML = '';

    if (category && imagePaths[category]) {
        imagePaths[category].forEach(src => {
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
selectAnimales.addEventListener('change', () => showImages(selectAnimales.value));
selectPersonas.addEventListener('change', () => showImages(selectPersonas.value));
selectNatura.addEventListener('change', () => showImages(selectNatura.value));
});
