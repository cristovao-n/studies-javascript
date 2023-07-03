// Create Element
const li = document.createElement('li');

// add Cçass
li.className = 'collection-item'; // or
li.classList.add('collection-item');

// add id
li.id = 'new-item';

// add attribute
li.setAttribute('style', 'background-color: #333; color: red');

// Create text node and append
li.appendChild(document.createTextNode('Hello'));

// Create new link element

const link = document.createElement('a');

link.className = 'delete-item secondary-content';

const i = document.createElement('i');
i.className = 'fa fa-remove';

link.appendChild(i);
li.appendChild(link);
// li.innerHTML = `List Item 5
// <a href="#" class="delete-item secondary-content">
//   <i class="fa fa-remove"></i>
// </a>`

document.querySelector('ul.collection').appendChild(li);

console.log(li);