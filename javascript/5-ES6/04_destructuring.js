 // destructuring was introduced in ES6 and it gives us an easy way to assign variables and extract variables from arrays and objects

 // Destructuring Assignment

//  let a, b, c; // This is optional

 [a, b, c] = [100, 200, 300];

 // Rest pattern

 [a, b, ...rest] = [100, 200, 300, 400, 500];
 
 // Array destructuring
const people = ['John', 'Beth', 'Mike'];

const [person1, person2, person3] = people;

// Object destructuring

const person = {
   name: 'John Doe',
   age: 32,
   city: 'Miami',
   gender: 'Male',
   sayHello: () => {
      console.log(`Hello ${person.name}`);
   }
}

// Old ES5 Syntax
// let name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6 Syntax

const { name, age, city } = person;

console.log(name);