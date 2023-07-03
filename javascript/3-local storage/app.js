// // set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');


// // set session storage item
// // sessionStorage.setItem('name', 'Beth');

// // remove from storage
// // localStorage.removeItem('name');

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// console.log(name, age);

// // clear local storage
// localStorage.clear();

// console.log(name, age);

let tasks = JSON.parse(localStorage.getItem('tasks')) === null ? [] : JSON.parse(localStorage.getItem('tasks'));

document.querySelector('form').addEventListener('submit', function(e){
    let task = document.getElementById('task').value;

    tasks.push(task);    

    localStorage.setItem('tasks', JSON.stringify(tasks));
    task = '';

    e.preventDefault();
    alert('task saved');
    
});

JSON.parse(localStorage.getItem('tasks')).forEach(function(task) {
    console.log(task);
});
