// Replace element

const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.innerHTML = 'Task Lists';
// newHeading.appendChild(document.createTextNode('Task Lists'));

const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.getElementsByClassName('card-action')[0];
cardAction.replaceChild(newHeading, oldHeading);

// Remove element

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list item

lis[0].remove();

// remove child element
list.removeChild(list.children[0]);

// Classes & Attribute

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes

val = link.className;
val = link.classList;
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes

val = link.getAttribute('href');
link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
console.log(val);