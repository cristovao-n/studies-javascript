function sayHello() {
   return new Promise((resolve, reject) => {
      resolve('Hello');
   });
}

// same thing as above
async function sayHello() {
   
   const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Hello'), 1000);
   });

   const error = false;

   if(!error) {
      const res = await promise;
      return res;
   } else {
      await Promise.reject(new Error('Something went wrong'));
   }
}

/*
sayHello()
   .then(res => console.log(res))
   .catch(error => console.log(error)); 
*/

function getUsers(url) {
   return new Promise((resolve, reject) => {
      fetch(url)
         .then(res => res.json())
         .then(data => resolve(data));
   });
}

// same as above

async function getUsers(url) {
   // await response of the fetch call
   const response = await fetch(url);

   // only proceed once its resolved
   const data = await response.json();

   // only proceed once second promise is resolved
   return data;
}

const url = 'https://ccm-backend.herokuapp.com/competicao';

getUsers(url).then(data => console.log(data));