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
        const p = document.createElement('p');
        const img = document.createElement('img');
        const deleteButton = document.createElement('button');

        p.textContent = photo.title;
        img.src = photo.url;
        deleteButton.textContent = 'Delete';

        div.appendChild(p);
        div.appendChild(img);
        div.appendChild(deleteButton);
        content.appendChild(div);

        deleteButton.addEventListener('click', () => {
            div.remove();
        });
    }
});

// TODO: crear botón para eliminar cada foto por id

// TODO: capacidad de actualizar el título de cada foto

// TODO: barra de búsqueda para encontrar fotos

// TODO: crear interfaz agradable a la vista
