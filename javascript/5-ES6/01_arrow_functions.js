let sayHello;

sayHello = function() {
   console.log('Hello');
}

sayHello = () => {
   console.log('Hello');
}

// One line function doesn't need braces
sayHello = () => console.log('Hello');

// One line returns
sayHello = () => 'Hello';

// same as above
sayHello = function() {
   return 'Hello';
}

sayHello = () => ({msg: 'Hello'});

// console.log(sayHello());

//Single param doesn't need parenthesis
sayHello = name => console.log(`Hello ${name}`);
// sayHello('Jom');

sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Jom', 'Carlos');

// With map
const users = ['Cristovao', 'Jom', 'Beatriz'];
let nameLengths;

nameLengths = users.map(function(userName) {
   return userName.length;
});

// Shorter
nameLengths = users.map((userName) => {
   return userName.length;
});

// Shortest
nameLengths = users.map(userName => userName.length);
// With forEach
// let nameLengths = [];
//  users.forEach(function(userName) {
//    nameLengths.push(userName.length);
// });

console.log(nameLengths);

// return console.log ?????
sayHello = () => {
   return console.log('Hello');
}
sayHello();