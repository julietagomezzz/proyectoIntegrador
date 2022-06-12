let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart";
let canciones = " ";

fetch(url)
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data);
})
.catch(function(error){
  console.log(error);
})

