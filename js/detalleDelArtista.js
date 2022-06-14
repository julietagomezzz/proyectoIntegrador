let queryString = location.search;

let queryStringObjLiteral = new URLSearchParams(queryString);

let id = queryStringObjLiteral.get('id');

let urlArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`;

let urlCancionesDelArtista = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/top?limit=5`;

let detalleDelArtista = " ";
let cancionesDelArtista = " ";

fetch(urlArtistas)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);

    let artista = data;
    detalleDelArtista = document.querySelector('.articleDetalle');
    
      detalleDelArtista.innerHTML = `<article>
                            <img class="imagenDetalle" src="${artista.picture_big}" alt='' />
                            <div class="divAlbum">
                            <h4 class="articlesParrafos h3">${artista.name}</h4>
                            <p class="articleAlbum articlesEnlaces"> Top 5 canciones: </p>
                            </div>
                            </article>`
  })
  .catch(function (error) {
    console.log("Error: " + error);
  })


  fetch(urlCancionesDelArtista)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);

    let cancionesArtista = data.data;
    cancionesDelArtista = document.querySelector('.cancionesDetalle');
    
    for (let i = 0; i < cancionesArtista.lenght; i++) {

      cancionesDelArtista.innerHTML =`<ul class="articleAlbum articlesEnlaces">
                                     <li><a class="articlesEnlaces" href="./detalleDeLaCancion.html?id=${cancionesArtista[i].title}">${cancionesArtista[i].title}</a></li>
                                     </ul>`
  }

  })
  .catch(function (error) {
    console.log("Error: " + error);
  })

