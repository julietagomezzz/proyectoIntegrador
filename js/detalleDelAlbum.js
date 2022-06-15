let queryString = location.search;

let queryStringObjLiteral = new URLSearchParams(queryString);

let id = queryStringObjLiteral.get('id');

let urlAlbum = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}`

let detalleDelAlbum = " ";
console.log(id)

fetch(urlAlbum)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);

    let album = data;
    detalleDelAlbum = document.querySelector('.articleDetalle');
    
    detalleDelAlbum.innerHTML = `<article>
                            <img class="imagenDetalle" src="${album.cover_big}" alt='' />
                            <div class="divAlbum">
                            <h4 class="articleAlbum articlesEnlaces">${album.title}</h4>
                            <p class="articleAlbum articlesEnlaces"><a class="articlesEnlaces" href="./detalleDelArtista.html?id=${album[i].album.id}"></a></p>
                            <p class="articleAlbum articlesEnlaces">${album.genres}</p>
                            <p class="articleAlbum articlesEnlaces">${album.release_date}</p>
                            <p class="articleAlbum articlesEnlaces"> Canciones: </p>
                            </div>
                            </article>`
  })
  .catch(function (error) {
    console.log("Error: " + error);
  })