let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list.childNodes; //NodeList - textnodes + element nodes + comment  etc
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeType;

//nodeType:

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

val = list.children; // HTMLCollection - element nodes
val = list.children[4].textContent = 'Hello';

// Children of children

list.children[0].children[0].id = 'test-link'; 
list.children[0].children[0].style.backgroundColor = '#333';
list.children[0].children[0].style.color = '#f4f4f4';
val = list.children[0].children[0]; 

val = list.firstChild; // text, element, etc
val = list.firstElementChild; // it selects only elements


val = list.lastChild; // text, element, etc
val = list.lastElementChild; // it selects only elements

val = list.childElementCount; // count child elements

val = listItem.parentNode; // get parent node (nodelist)
val = listItem.parentElement; // get parent node (htmlcollection)
val = listItem.parentElement.parentElement;


val = listItem.nextSibling; //nodelist 
val = listItem.nextElementSibling; //HTMLCollection

val = listItem.previousSibling; //nodelist
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; //HTMLCollection
console.log(val);