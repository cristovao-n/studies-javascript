let val;


// HTML Collection and NodeList - You cannot use array methods like forEach
// Properties

val = document;
val = document.all;
val = document.all[1];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// Selecting elements without selectors
val = document.forms;
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;
val = document.scripts[2];
val = document.scripts[2].getAttribute('src');

// converting html collection into an array
let scripts = document.scripts;

let scriptsArray = Array.from(scripts);

scriptsArray.forEach(function(script, index) {
    console.log(`the index of the script ${script} is ${index}`);
});
console.log(scripts);
