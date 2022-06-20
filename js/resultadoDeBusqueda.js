alert('No hay resultados que coincidan con tu busqueda');

let queryString = location.search;

let queryStringObjLiteral = new URLSearchParams(queryString);

let id = queryStringObjLiteral.get('id');

let urlUser = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${id}`;


fetch(urlUser)
.then(function(respuesta) {
    return respuesta.json()
}).then(function(data) {

})
.catch(function (error) {
  console.log("Error: " + error);
})