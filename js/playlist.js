let recuperoStorage = localStorage.getItem('favoritos');

let favoritos = JSON.parse(recuperoStorage);

let section = document.querySelector('.lista');

let cancionesFavoritas = '';

if(favoritos == null || favoritos.length == 0) {
    section.innerHTML =  '<p>No hay favoritos actualmente</p>';
} else {
    for (let i = 0; i < favoritos.length; i++) {

        const url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${favoritos[i]}`;
        
        fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
        
            let canciones = data;

            cancionesFavoritas +=  `<article>
                                    <img class="imagenPlaylist" src="${canciones.album.cover_medium}" alt='' />
                                    <h4 class="articleAlbum articlesEnlaces h3"><a class="articlesEnlaces" href="./detalleDeLaCancion.html?id=${canciones.title.id}">${canciones.title}</a></h4>
                                    <h5 class="articleAlbum articlesEnlaces h3"><a class="articlesEnlaces" href="./detalleDelAlbum.html?id=${canciones.album.title.id}">${canciones.album.title}</a></h5>
                                    <p class="articleAlbum articlesEnlaces"><a class="articlesEnlaces" href="./detalleDelArtista.html?id=${canciones.artist.id}">${canciones.artist.name}</a></p>
                                    </article>`
            section.innerHTML = cancionesFavoritas
        })
        .catch(function(error) {
            console.log(error);
          })
    }
}