document.addEventListener('DOMContentLoaded', () => {
    const selectAnimales = document.getElementById('animales');
    const selectPersonas = document.getElementById('personas');
    const selectNatura = document.getElementById('natura');
    const imageContainer = document.getElementById('image-container');

    const imagePaths = {
        perros: ['images/perros/perros1.jpg', 'images/perros/perros2.jpg'],
        gatos: ['images/gatos/gatos1.jpg', 'images/gatos/gatos2.jpg'],
        otros: ['images/otros/otros1.jpg', 'images/otros/otros2.jpg'],
        femenino: ['images/femenino/femenino1.jpg', 'images/femenino/femenino2.jpg'],
        masculino: ['images/masculino/masculino1.jpg', 'images/masculino/masculino2.jpg'],
        playa: ['images/playa/playa1.jpg', 'images/playa/playa2.jpg'],
        bosque: ['images/bosque/bosque1.jpg', 'images/bosque/bosque2.jpg']
    };

    function showImages(category) {
        imageContainer.innerHTML = ''; // Clear previous images
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