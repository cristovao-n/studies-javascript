

document.getElementsByClassName('get-jokes')[0].addEventListener('click', getJokes);

function getJokes(e) {

   const numJokes = document.querySelector('form input[type="number"]').value;

   // console.log(numJokes);

   const xhr = new XMLHttpRequest();

   xhr.open('GET', `http://api.icndb.com/jokes/random/${numJokes}`, true);

   xhr.onload = function() {
      // console.log(xhr.status);
      if(this.status === 200) {
         const jokes = JSON.parse(this.responseText);
         let output = '';
         
         if(jokes.type === 'success') {
            jokes.value.forEach(joke => {
               
               output += `
                  <li>${joke.joke}</li>
               `;
            });

         } else {
            output += 'Something went wrong';
         }
         
         document.querySelector('.jokes').innerHTML = output;
      }

   }

   xhr.send();

   document.querySelector('form input').value = '';
   e.preventDefault();
}