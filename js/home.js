let urlcanciones = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart";

let canciones = " ";

fetch(urlcanciones)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);

  let song = data.tracks.data;
  canciones = document.querySelector(".cancionesAPI");

  for (let i = 0; i < 5 ; i++) {

    canciones.innerHTML += `<article>
                            <img src="${song[i].artist.picture_medium}" alt='' />
                            <p> ${song[i].title}</p>
                            <p> ${song[i].album.title} </p>
                            </article>`

  }
})
.catch(function(error) {
  console.log("Error: " + error);
})