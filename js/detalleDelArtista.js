let queryString = location.search;

let queryStringObjLiteral = new URLSearchParams(queryString);

let id = queryStringObjLiteral.get('id');

let urlArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`;

let urlCancionesDelArtista = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/top?limit=5`;

let detalleDelArtista = " ";
let cancionesDelArtista = " ";
let cancionesDelArtistaHtml = document.querySelector("#a")

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
    console.log(data.data);

    let cancionesArtista = data.data;
    
    console.log(cancionesArtista.length)
    
    for (let i = 0; i < cancionesArtista.length; i++) {
     console.log(i)
     cancionesDelArtista += `<li><a class="articlesEnlaces" href="./detalleDeLaCancion.html?id=${cancionesArtista[i].id}">${cancionesArtista[i].title}</a></li>`
      
    }
    cancionesDelArtistaHtml.innerHTML = cancionesDelArtista;
  })
  .catch(function (error) {
    console.log("Error: " + error);
  })

  let formulario = document.querySelector('form');

  formulario.addEventListener('submit',function(e){
    e.preventDefault();
    let inputBusqueda = document.querySelector('input');

    if (inputBusqueda.value == '') {
      alert('El campo no puede estar vacio');
    } else if (inputBusqueda.value.length <= 3) {
      alert('Debe contener mas de tres caracteres');
    } else {
      this.submit()
    } 
  });


