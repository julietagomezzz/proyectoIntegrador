let queryString = location.search;

let queryStringObjLiteral = new URLSearchParams(queryString);

let id = queryStringObjLiteral.get('id');

let urlGeneros = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/artists`;

let detalleDelGenero = " ";

let generosHtml = document.querySelector(".sectionGenero");

fetch(urlGeneros)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data.data);

    let genero = data.data;

    console.log(genero.length)

    for (let i = 0; i < genero.length; i++) {

      console.log(i)
      
      detalleDelGenero +=  `<article>
                            <img class="imagenes" src="${genero.cover_big}" alt="">
                            <h4 class="articlesParrafos fondoGenero"><a class="articlesEnlaces" href="./detalleDelArtista.html?id=${genero[i].id}">${genero[i].title}</a></h4>
                            </article>`       
     }

     generosHtml.innerHTML = detalleDelGenero;

  })
  
  .catch(function (error) {
    console.log("Error: " + error);
  })