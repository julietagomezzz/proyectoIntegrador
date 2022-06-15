let queryString = location.search;

let queryStringObjLiteral = new URLSearchParams(queryString);

let id = queryStringObjLiteral.get('id');

let urlCancion = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`;

let detalleDeLaCancion = " ";

fetch(urlCancion)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);

    let cancion = data;
    detalleDeLaCancion = document.querySelector('.sectionCancion');
    
      detalleDeLaCancion.innerHTML = `<article>
                                    <img class="imagenDetalle" src="${cancion.album.cover_big}" alt='' />
                                    <div class="divAlbum">
                                    <h4 class="articleAlbum articlesEnlaces h3">${cancion.title}</h4>
                                    <h5 class="articleAlbum articlesEnlaces h3">${cancion.album.title}</h5>
                                    <p class="articleAlbum articlesEnlaces h3">${cancion.artist.name}</p>
                                    <p class="articleAlbum articlesEnlaces"> Mi playlist </p>
                                    </div>
                                    </article>`
  })
  .catch(function (error) {
    console.log("Error: " + error);
  })