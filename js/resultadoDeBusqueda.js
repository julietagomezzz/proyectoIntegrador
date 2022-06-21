
let queryString = location.search;

let queryStringObjLiteral = new URLSearchParams(queryString);

let id = queryStringObjLiteral.get('busqueda');

let urlUser = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${id}`;


fetch(urlUser)
.then(function(respuesta) {
    return respuesta.json()
}).then(function(data) {
    console.log (data.data)
        let resultadoDeBusqueda = data.data
        let resultadoDeBusqueda1 = document.querySelector(".resultadodebusquedaJS");
        if (resultadoDeBusqueda.length == 0) {
            alert ( 'No se encontraron resultados para tu busqueda' );
        }
        else {
            for (let i = 0; i < 5; i++) {
    
                resultadoDeBusqueda1.innerHTML += `<article class="articleHome">
                                      <img class="imagenes" src="${resultadoDeBusqueda[i].album.artist}" alt='' />
                                      <h4 class="articlesParrafos"><a class="articlesEnlaces" href="./detalleDeLaCancion.html?id=${song[i].album.id}">${song[i].title}</a></h4>
                                      <p class="articlesParrafos"><a class="articlesEnlaces" href="./detalleDelArtista.html?id=${song[i].artist.id}">${song[i].artist.name}</a></p>
                                      </article>`
              }

        }
})
.catch(function (error) {
  console.log("Error: " + error);
})