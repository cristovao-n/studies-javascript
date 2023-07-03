// selectors for single elements

let val;

val = document.getElementById('task-title');

// Get things from the element
val = document.getElementById('task-title').id;
val = document.getElementById('task-title').className;

// you better create a variable to store the code

const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.backgroundColor = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '8px';
taskTitle.style.borderRadius = '8px';
// document.getElementById('task-title').style.display = 'none';

// Change content

taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<i>My Tasks</i>';

console.log(val);


// querySelector

val = document.querySelector('#task-title');
val = document.querySelector('.card-title');
val = document.querySelector('h5').outerHTML;

document.querySelector('ul li:nth-child(2)').style.color = 'red';
document.querySelector('ul li:nth-child(4)').textContent = 'Txow';
