// String
const name1 = 'Jeff';
const name2 = new String('Jeff');
console.log(typeof name2);

// name2 is an object, name1 is a string, which is a primitive data type in javascript

// Number
const num1 = 5;
const num2 = new Number(5);
console.log(typeof num2);

// Boolean
const boo1 = true;
const bool2 = new Boolean(true);
console.log(typeof bool2);

// Function
const getSum1 = function (x, y) { return x + y };
const getSum2 = new Function('x', 'y', 'return x+y');
console.log(getSum2(15, 5));

// these below don't have so much difference

// Object
const john1 = {name: 'john'};
const john2 = new Object({name: 'john'});
console.log(john2);

// Array
const array1 = [1,2,3,4];
const array2 = new Array(1,2,3,4);
console.log(array1);

// Regular expressions
const rel1 = /\w+/;
const rel2 = new RegExp('\\w+');
console.log(rel2);