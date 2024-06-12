//has pasados por auth??
const urlauth = new URLSearchParams(window.location.search);
const authen = urlauth.get('auth');
console.log(authen);
if (!authen){
    alert('Tramposo')
    window.location = 'index.html';
}

//Cambio de titulos 
const titulocategoria = document.getElementById('categoria')
const titulosubcategora = document.getElementById('subcategoria')

// Cambio de imagenes . 
document.addEventListener('DOMContentLoaded', () => {
    const selectAnimales = document.getElementById('animales');
    const selectPersonas = document.getElementById('personas');
    const selectNatura = document.getElementById('natura');
    const imageContainer = document.getElementById('image-container');
// IMAGENES : 
    const imagePaths = {
        perros: [
            'images/perros/perros1.jpg', 
            'images/perros/perros2.jpg',
            'images/perros/perros3.jpg', 
            'images/perros/perros4.jpg',
            'images/perros/perros5.jpg', 
            'images/perros/perros6.jpg',
            'images/perros/perros7.jpg', 
            'images/perros/perros8.jpg',
            'images/perros/perros9.jpg', 
            'images/perros/perros10.jpg',
            'images/perros/perros11.jpg',
             'images/perros/perros12.jpg',
             'images/perros/perros13.jpg',
              'images/perros/perros14.jpg',
              'images/perros/perros15.jpg',
        ],
        gatos: [
            'images/gatos/gatos1.jpg',
             'images/gatos/gatos2.jpg',
             'images/gatos/gatos3.jpg', 
             'images/gatos/gatos4.jpg'

        ],
        otros: [
            'images/otros/otros1.jpg',
            'images/otros/otros2.jpg',
            'images/otros/otros3.jpg', 
            'images/otros/otros4.jpg', 
            'images/otros/otros5.jpg',
            'images/otros/otros6.jpg',
            'images/otros/otros7.jpg',
            'images/otros/otros8.jpg',
            'images/otros/otros9.jpg'
        ],
        femenino: [
            'images/femenino/femenino1.jpg',
            'images/femenino/femenino2.jpg',
            'images/femenino/femenino3.jpg',
            'images/femenino/femenino4.webp',
            'images/femenino/femenino5.jpeg',
            'images/femenino/femenino6.jpg',
            'images/femenino/femenino7.jpeg',
            'images/femenino/femenino8.jpg',
            'images/femenino/femenino9.jpg',
            'images/femenino/femenino10.jpg',
            'images/femenino/femenino11.jpg',
            'images/femenino/femenino12.jpg',
            'images/femenino/femenino13.jpg',
            'images/femenino/femenino14.jpg',
            'images/femenino/femenino15.jpg',
            'images/femenino/femenino16.jpg',
            'images/femenino/femenino17.jpg',
            'images/femenino/femenino18.jpg'
        ],
        masculino: [
                'images/masculino/masculino1.jpg', 
                'images/masculino/masculino2.jpg',
                'images/masculino/masculino3.jpg',
                'images/masculino/masculino4.jpg',
                'images/masculino/masculino5.jpg',
                'images/masculino/masculino6.jpg',
                'images/masculino/masculino7.jpg',
                'images/masculino/masculino8.jpg',
                'images/masculino/masculino9.jpg',
            ],
        playa: [
            'images/playa/playa1.jpg', 
            'images/playa/playa2.jpg',
            'images/playa/playa3.jpg', 
            'images/playa/playa4.jpg',
            'images/playa/playa5.jpg', 
            'images/playa/playa6.jpg',
            'images/playa/playa7.jpg', 
            'images/playa/playa8.jpg',
            'images/playa/playa9.jpg', 
            'images/playa/playa10.jpg',
            'images/playa/playa11.jpg', 
            'images/playa/playa12.jpg',
        ],
        bosque: [
            'images/bosque/bosque1.jpg', 
            'images/bosque/bosque2.jpg',
            'images/bosque/bosque3.jpg',
            'images/bosque/bosque4.jpg',
            'images/bosque/bosque5.jpg',
            'images/bosque/bosque6.jpg', 
            'images/bosque/bosque7.jpg',
            'images/bosque/bosque8.jpg',
            'images/bosque/bosque9.jpg',
            'images/bosque/bosque10.jpg',
            'images/bosque/bosque11.jpg',
            'images/bosque/bosque12.jpg',
            
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