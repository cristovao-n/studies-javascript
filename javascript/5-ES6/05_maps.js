// MAPS = key-value pairs = can use ANY type as a key or value

const map = new Map();

map.set('Banana', 3.99);
map.set('Apple', 2.99);
map.set('Watermelon', 1.99);
map.set('Orange', 0.99);

// Get values by key
// console.log('Fruit      Value');
// console.log(`Banana     ${map.get('Banana')}`);
// console.log(`Apple      ${map.get('Apple')}`);

// Size of the map
// console.log(map.size);

// Iterating maps
// for of

for (let [key, value] of map) {
   // console.log(`${key} = ${value}`);
}

// Iterate keys only
for (let key of map.keys()) {
   // console.log(key);
}


// Iterate values only
for (let value of map.values()) {
   // console.log(value);
}

// forEach
map.forEach((value, key) => {
   // console.log(`${key} = ${value}`);
});

// Convert to arrays
const mapArray = Array.from(map);

// console.log(map);
// console.log(mapArray);

// array of the keys
const keyArray = Array.from(map.keys());


// array of the values
const valArray = Array.from(map.values());

console.log(keyArray);
console.log(valArray);