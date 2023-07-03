

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick (e) {
    
    e.preventDefault();
    // console.log('Clicked');
    let val;
    val = e.target;
    val = e.target.id;
    e.target.classList.remove('black');
    e.target.style.backgroundColor = 'blue';

    val = e.type;

    val = e.timeStamp;

    // event coords relative to the window
    val = e.clientY;
    val = e.clientX;

    // event coords relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}