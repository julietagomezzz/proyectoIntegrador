let urlcanciones = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart";

let detalleDelArtista = " ";

fetch(urlcanciones)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);

    let artista = data.artists.data;
    detalleDelArtista = document.querySelector('.articleDetalle');
    
      detalleDelArtista.innerHTML = `<article>
                            <img class="imagenDetalle" src="${artista.picture_big}" alt='' />
                            <div class="divAlbum">
                            <h4 class="articlesParrafos">${artista.name}</h4>
                            <p class="articleAlbum articlesEnlaces"> Top 5 canciones: </p>
                            <ul class="articleAlbum articlesEnlaces">
                                <li> <a class="articlesEnlaces" href="./detalleDeLaCancion.html">${artista.title}</a> </li>
                                <li> <a class="articlesEnlaces" href="./detalleDeLaCancion.html">${artista.title}</a> </li>
                                <li> <a class="articlesEnlaces" href="./detalleDeLaCancion.html">${artista.title}</a> </li>
                                <li> <a class="articlesEnlaces" href="./detalleDeLaCancion.html">${artista.title}</a> </li>
                                <li> <a class="articlesEnlaces" href="./detalleDeLaCancion.html">${artista.title}</a> </li>
                            </ul>
                            </div>
                            </article>`
  })
  .catch(function (error) {
    console.log("Error: " + error);
  })
