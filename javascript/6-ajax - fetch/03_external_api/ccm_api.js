document.querySelector('.get-jokes').addEventListener('click', getUsers);

function getUsers(e) {

   const xhr = new XMLHttpRequest();

   xhr.open('GET','https://ccm-backend.herokuapp.com/usuario',true)

   xhr.onload = function() {

      if(this.status === 200) {

         const users = JSON.parse(this.responseText);
         let output = '';
         users.forEach(user => {
            output += `
            <ul>
            <li>ID: ${user.id}</li>
            <li>Nome: ${user.nome}</li>
            <li>Email: ${user.email}</li>
            <li>Senha: ${user.senha}</li>
            </ul>
            `; 
         });
         
         document.querySelector('.jokes').innerHTML = output;
      }
   }
   xhr.send();
   e.preventDefault();
}