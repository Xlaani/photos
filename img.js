async function getPhotos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = await response.json();
    return photos;
}

const button = document.getElementById('button');

button.addEventListener('click', async () => {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const photos = await getPhotos();
    // Using fixed amount of photos temporarily because if not it'll turn into an XBOX 360 Red Ring of Death
    for (const photo of photos.slice(0, 100)) {
        const template = `
            <div>
                <p>${photo.title}</p>
                <img src="${photo.url}" />
                <button data-id="${photo.id}">Delete</button>
            </div>
        `;

        content.insertAdjacentHTML('beforeend', template);

        content
            .querySelector(`[data-id="${photo.id}"]`)
            .addEventListener('click', (event) => {
                event.target.parentElement.remove();
            });
    }
});

// TODO: crear botón para eliminar cada foto por id

// TODO: capacidad de actualizar el título de cada foto

// TODO: barra de búsqueda para encontrar fotos

// TODO: crear interfaz agradable a la vista

// TODO: implementar scroll infinito de fotos (ir mostrando entre 5 y 10~)
