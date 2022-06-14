let urlcanciones = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart";

let generos = " ";

fetch(urlcanciones)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);

    let genero ;
    generos = document.querySelector(".sectionGenero1");


     for (let i = 0; i < 3; i++) {
    
      generos.innerHTML += `<article class="articleHome">
                            <img class="imagenGenero" src="${song[i].artist.picture_medium}" alt='' />
                            <h4 class="h4genero"><a href="./detalleDelGenero.html" class="articlesEnlaces">${artista[i].name}</a></h4>
                            </article>`
    }

  })
  .catch(function (error) {
    console.log("Error: " + error);
  })
