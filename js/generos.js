let queryString = location.search;

let queryStringObjLiteral = new URLSearchParams(queryString);

let id = queryStringObjLiteral.get('id');

let urlGeneros = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre`;

let generos = " ";

fetch(urlGeneros)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);

    let genero = data.data;
    generos = document.querySelector(".sectionGenero1");


     for (let i = 1; i < 13; i++) {
    
      generos.innerHTML += `<article class="articleHome">
                            <img class="imagenes" src="${genero[i].picture_medium}" alt='fotoGeneros' />
                            <h4 class="h4genero"><a href="./detalleDelGenero.html" class="articlesEnlaces">${genero[i].name}</a></h4>
                            </article>`
    }

  })
  .catch(function (error) {
    console.log("Error: " + error);
  })
