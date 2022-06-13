let section = document.querySelector('.sectionPadre');
let proxy = 'https://api.allorigins.win/raw?url=';
let url = 'https://api.deezer.com/chart';

fetch(proxy + url)
.then(function (response) {
return response.json();  
})
.then(function (data) {
  console.log(data);
})
.catch(function (error) {
  console.log(error);
})
