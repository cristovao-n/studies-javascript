// Iterator example
 
function nameIterator(names) {
   let nextIndex = 0;

   return {
      next: () => {
         return nextIndex < names.length
               ? {value: names[nextIndex++], done: false}
               : {done: true}
      }
   }
}

const namesArr = ['Jack', 'Jill', 'John', 'Carlos'];

const names = nameIterator(namesArr);
let name;
name = names.next();
name = names.next();
name = names.next();
name = names.next();
name = names.next();

// console.log(name);


// Generator example

function* sayNames() {
   yield 'Jack';
   yield 'Jill';
   yield 'John';
   yield 'Carlos';
}

const namess = sayNames();
name = namess.next();
name = namess.next();
name = namess.next();
// console.log(name);

// ID Generator

function* createIDs() {
   let index = 0;

   while(true) {
      yield index++;
   }
}

const gen = createIDs();
let id;
id = gen.next();
id = gen.next();
id = gen.next();
id = gen.next();
id = gen.next();
id = gen.next();

console.log(id);
