document.getElementById('button').addEventListener('click', loadData);

function loadData() {

   const xhr = new XMLHttpRequest();

   xhr.open('GET', 'data.txt', true);
   // console.log('READYSTATE', xhr.readyState);

   // Optional - Used for spinners/loaders
   xhr.onprogress = function () {
      // processing request...
      const h1 = document.createElement('h1');
      h1.textContent = 'Processing request...';
      document.getElementsByClassName('container')[0].appendChild(h1);

   }

   // new way
   xhr.onload = function () {

      document.getElementsByClassName('container')[0].removeChild(document.querySelector('h1'));

      if (this.status === 200) {
         console.log(xhr.responseText);
         document.getElementById('output').innerHTML = `<h1>${xhr.responseText}</h1>`;
      }


   }

   // old way
   /* 
      xhr.onreadystatechange = function() {
      console.log('READYSTATE', xhr.readyState);
      if(this.status === 200 && this.readyState === 4) {
         console.log(this.responseText);
      }
   } */

   // Error

   xhr.onerror = function () {
      console.log('Request error');
   }
   xhr.send();
}

// readyState Values
/* 0: request not initialized
   1: server connection established
   2: request received
   3: processing request
   4: request finished and response is ready
*/

// HTTP Statuses
/*
200: "OK"
403: "Forbidden"
404: "Not Found"
*/