let queryString = location.search;

let queryStringObjLiteral = new URLSearchParams(queryString);

let id = queryStringObjLiteral.get('id');

let urlAlbum = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}`;

let urlCancionesDelAlbum = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/top?limit=9`;

let detalleDelAlbum = " ";
let cancionesDelAlbum = " ";
let cancionesDelAlbumHtml = document.querySelector("#a");

fetch(urlAlbum)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);

    let album = data;
    detalleDelAlbum = document.querySelector('.articleDetalleDelAlbum');

    detalleDelAlbum.innerHTML += `<article>
                                  <img class="imagenDetalle" src="${album.cover_big}" alt='' />
                                  <div class="divAlbum">
                                  <h4 class="articleAlbum articlesEnlaces">${album.title}</h4>
                                  <p class="articleAlbum articlesEnlaces"><a class="articlesEnlaces" href="./detalleDelArtista.html?id=${album.artist.id}">${album.artist.name}</a></p>
                                  <p class="articleAlbum articlesEnlaces">${album.genres.data.name}</p>
                                  <p class="articleAlbum articlesEnlaces">${album.release_date}</p>
                                  <p class="articleAlbum articlesEnlaces"> Canciones: </p>
                                  </div>
                                  </article>`
  })
  .catch(function (error) {
    console.log("Error: " + error);
  })

  fetch(urlCancionesDelAlbum)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data.data);

    let cancionesAlbum = data.data;

    console.log(cancionesAlbum.length)

    for (let i = 0; i < cancionesAlbum.length; i++) {
      console.log(i)
      cancionesDelAlbum += `<li><a class="articlesEnlaces" href="./detalleDeLaCancion.html?id=${cancionesAlbum[i].id}">${cancionesAlbum[i].title}</a></li>`
       
     }
     cancionesDelAlbumHtml.innerHTML = cancionesDelAlbum;
  })
  .catch(function (error) {
    console.log("Error: " + error);
  })