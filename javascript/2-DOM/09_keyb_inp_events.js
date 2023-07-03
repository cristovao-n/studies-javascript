const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// form.addEventListener('submit', runEvent);

// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);


// When you click on the input
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);


// taskInput.addEventListener('cut', runEvent);
// good for email and password validations
// taskInput.addEventListener('paste', runEvent);
taskInput.addEventListener('input', runEvent);

function runEvent (e) {
    console.log(`EVENT TYPE: ${e.type}`);

    // get input value
    console.log(e.target.value);
    heading.textContent = e.target.value;
    // clear input
    // taskInput.value = '';
    // e.preventDefault();
}