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
  
    let canciones = data;
    detalleDeLaCancion = document.querySelector('.sectionCancion');

    detalleDeLaCancion.innerHTML = `<article>
                                    <img class="imagenDetalle" src="${canciones.album.cover_big}" alt='' />
                                    <div class="divAlbum">
                                    <h4 class="articleAlbum articlesEnlaces h3">${canciones.title}</h4>
                                    <h5 class="articleAlbum articlesEnlaces h3">${canciones.album.title}</h5>
                                    <p class="articleAlbum articlesEnlaces"><a class="articlesEnlaces" href="./detalleDelArtista.html?id=${canciones.artist.id}">${canciones.artist.name}</a></p>
                                    <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="280" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
                                    <div><a href="./playlist.html?id=${canciones}" class="articleAlbum articlesEnlaces h3">Ir a mi playlist</a></div>
                                    </div>
                                    </article>`
  })
  .catch(function (error) {
    console.log("Error: " + error);
  })

  let favoritos = [];

  let recuperoStorage = localStorage.getItem('favoritos');

  if (recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage);
  }

  let fav = document.querySelector('.fav');

  if(favoritos.includes(id)){
    fav.innerText = "quitar de favoritos"
  }

  fav.addEventListener('click', function(e){
    e.preventDefault()

    if (favoritos.includes(id)) {
        let indice = favoritos.indexOf(id);
        favoritos.splice(indice, 1)
        fav.innerText = "agregar a favoritos"

    } else {
        favoritos.push(id);{
            fav.innerText = "quitar de favoritos"
        }
    }

    let favsJSON = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favsJSON)

  })