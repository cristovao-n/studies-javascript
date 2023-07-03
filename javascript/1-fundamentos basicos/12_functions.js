
//Function declarations

function greet(firstName = 'John', lastName = 'Doe') {

    return `Hello, ${firstName} ${lastName}`;
}

console.log(greet('Cristovo', 'Ximbas'));

// Function Expresions

const square = function(x = 0) {
    return Math.pow(x, 2);
}

console.log(square());


// Immidiatley invokable function expressions - IIFEs

(function(name) {
    console.log('IIFE Ran... Hello, ' + name);
})('Cris');


// Property methods

const Todo = {

    add: function () {
        console.log('Add todo');
    },
    edit: function (id = 9999) {
        console.log(`Edit todo ${id}`);
    }

}

Todo.delete = function (id) {
    console.log(`Todo ${id} deleted!`);
}

Todo.add();
Todo.edit();
Todo.delete(3);