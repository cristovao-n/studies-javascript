// Sets store unique values of any type

const set = new Set();

// Adding values to set
set.add(100);
set.add('String');
set.add({name: 'Jom'});
set.add(true);
// this one won't be added because we already have this value in the set
set.add(100);

// We can use the constructor to add values to set in this way:
const set2 = new Set([1, 1, 1, 1, 1, 1, 1, true, 1, 'string', {name: 'Jom'}]);

// Get size
// console.log(set.size);

// Check for values
// console.log(set.has('String'));
// console.log(set.has({name: 'Jom'}));
// console.log(set.has(50+50));
// important thing;
const bo = {name: 'Jom'} === {name: 'Jom'};
// console.log(bo);

// Delete from set
set.delete(100);

// Iterating through sets

for (let value of set) {
   // console.log(value);
}

set.forEach((value) => {
   // console.log(value);
});

// converting set to array
const setArray = Array.from(set);
// console.log(setArray);


// GOOD EXAMPLE OF USING SET

const array1 = [1, 1, 2, 2, 3, 4, 3, 5];

// array2 containing only unique values of array1
const array2 = Array.from(new Set(array1));

console.log(array2);