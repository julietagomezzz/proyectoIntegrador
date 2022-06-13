let section = ('.sectionPadre') ;
let url = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart';

fetch(url)
.then(function (response) {
  return response.json();
}) .then(function (data) {
  console.log(data)
})
.catch(function (error){
console.log(error)
})