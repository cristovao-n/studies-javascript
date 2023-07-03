const id = 100;
let output;

if (id !== 100) {
    output = 'CORRECT';

} else {
    output = 'INCORRECT';

}
console.log(output);

// Test if undefined
if (typeof id !== 'undefined') {
    output = `The ID is ${id}`;
} else {
    output = 'No ID';
}

console.log(output);


const color = 'red';

if (color === 'red') {
    output = 'Color is red';
} else if (color === 'blue') {
    output = 'Color is blue';
} else {
    output = 'Color isn\'t red or blue';
}


// Logical Operators

const person = {
    name: 'Steve',
    age: 8
}

// and &&

if (person.age >= 0 && person.age < 12) {
    console.log(`${person.name} is a child`);

} else if(person.age >= 12 && person.age < 20) {
    console.log(`${person.name} is a teenager`);

} else {
    console.log(`${person.name} is an adult`);
}

// or ||

if (person.age < 16 || person.age > 65) {
    console.log(`${person.name} cannot run in race`);
} else {
    console.log(`${person.name} is registered for the race`);
}


// Ternary operator

console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// Without braces

if (id >= 100)
    output = 'Correct';
else
    output = 'Incorrect';