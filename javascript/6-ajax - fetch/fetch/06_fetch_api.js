// Fetch API is a newer standard for dealing with HTTP requests.

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

// AJAX
/*
const xhr = new XMLHttpRequest();
xhr.open('GET', 'test.txt', true);

xhr.onload = function() {
   // document.querySelector('div#output').innerHTML = 
   // `<p>${xhr.responseText}</p>`;

   const p = document.createElement('p');
   p.textContent = xhr.responseText;
   document.querySelector('div#output').appendChild(p);
}

xhr.send();
*/


// OLD SINTAX
/*
function getText() {
   
   // FETCH
   fetch('test.txt')
   .then(function(res) {
      return res.text();
   })
   .then(function(data) {
      document.getElementById('output').innerHTML = `<p>${data}</p>`;
   })
   .catch(function(error) {
      console.log(error);
   });
   
} */
// ARROW FUNCTIONS
function getText() {

   // FETCH
    fetch('test.txt')
      .then(res => res.text())
      .then(data => {
         document.getElementById('output').innerHTML = `<p>${data}</p>`;
      })
      .catch(error => console.log(error));
}

function getJSON() {
   fetch('posts.json')
      .then(res => res.text())
      .then(games => {
         let output = '';
         JSON.parse(games).forEach(function(game) {
            output += `<li>Name: ${game.name}</li>`;
         });
         document.getElementById('output').firstElementChild.innerHTML = output;
      })
      .catch(error => {
         console.log(error);
      });
}

function getExternal() {
   fetch('https://ccm-backend.herokuapp.com/competicao')
      .then(res => res.json())
      .then(competicoes => {
         let output = '';
         competicoes.forEach(function(competicao) {
            output += `<li>Title: ${competicao.titulo}</li>`;
         });
         document.getElementById('output').firstElementChild.innerHTML = output;
      })
      .catch( error => console.log(error));
}