async function getPhotos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = await response.json();
    return photos;
}

const button = document.getElementById('button');

button.addEventListener('click', async () => {
    const content = document.getElementById('content');

    const photos = await getPhotos();
    for (const photo of photos) {
        const div = document.createElement('div');

        const template = `
            <div>
                <p>${photo.title}</p>
                <img src="${photo.url}" />
                <button data-id="${photo.id}">Delete</button>
            </div>
        `;

        div.innerHTML = template;
        content.appendChild(div);

        const deleteButton = content.querySelector(`[data-id="${photo.id}"]`);
        deleteButton.addEventListener('click', () => {
            div.remove();
        });
    }
});

// TODO: crear botón para eliminar cada foto por id

// TODO: capacidad de actualizar el título de cada foto

// TODO: barra de búsqueda para encontrar fotos

// TODO: crear interfaz agradable a la vista

// TODO: implementar scroll infinito de fotos (ir mostrando entre 5 y 10~)
