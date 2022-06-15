let urlcanciones = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart";

let canciones = " ";

fetch(urlcanciones)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);

    let song = data.tracks.data;
    let artista = data.artists.data;
    canciones = document.querySelector(".sectionPadre");


     for (let i = 0; i < 5; i++) {
    
      canciones.innerHTML += `<article class="articleHome">
                            <img class="imagenes" src="${song[i].artist.picture_medium}" alt='' />
                            <h4 class="articlesParrafos"><a class="articlesEnlaces" href="./detalleDelAlbum.html?id=${song[i].title}">${song[i].title}</a></h4>
                            <p class="articlesParrafos"><a class="articlesEnlaces" href="./detalleDelArtista.html?id=${song[i].artist.name}">${song[i].artist.name}</a></p>
                            </article>`
    }

    canciones = document.querySelector(".sectionPadre2");

    for (let i = 0; i < 5; i++) {

      canciones.innerHTML += `<article class="articleHome">
                            <img class="imagenes" src="${song[i].album.cover_medium}" alt='' />
                            <h4 class="articlesParrafos"><a class="articlesEnlaces" href="./detalleDelAlbum.html?id=${song[i].album.id}">${song[i].album.title}</a></h4>
                            <p class="articlesParrafos"><a class="articlesEnlaces" href="./detalleDelArtista.html?id=${song[i].artist.id}">${song[i].artist.name}</a></p>
                            </article>`

    }

    canciones = document.querySelector(".sectionPadre3");

    for (let i = 0; i < 5; i++) {

      canciones.innerHTML += `<article class="articleHome">
                            <img class="imagenes" src="${artista[i].picture_medium}" alt='' />
                            <h4 class="articlesParrafos"><a class="articlesEnlaces" href="./detalleDelArtista.html?id=${artista[i].id}">${artista[i].name}</a></h4>
                            </article>`

    }

  })
  .catch(function (error) {
    console.log("Error: " + error);
  })
