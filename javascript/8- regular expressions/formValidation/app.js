const fields = [
   {
      dataType: 'name',
      regex: /^[A-Za-z]{2,10}$/
   },

   {
      dataType: 'zipcode',
      regex: /^[0-9]{5}-?[0-9]{3}$/
   },

   {
      dataType: 'email',
      regex: /^[a-zA-Z0-9_\-\.]+@[a-z]+\.[a-zA-Z]{2,5}$/
   },
   {
      dataType: 'phone',
      regex: /^\(?\d?\d{2}\)?\s?\d{4}[-. ]?\d{4}$/
   } 
]

fields.forEach((field) => {
   document.getElementById(field.dataType).addEventListener('blur', validateField);
   document.getElementById(field.dataType).parentElement.lastElementChild.textContent = `Enter a valid ${field.dataType}`;
});


function validateField(e) {

   const re = fields.find((field) => {
      return field.dataType === e.target.id;
   }).regex;

   console.log(re);

   console.log(e.target.id);

   if(!re.test(e.target.value)) {
      e.target.parentElement.classList.add('invalid-input');

   } else {
      e.target.parentElement.classList.remove('invalid-input');
   }
}