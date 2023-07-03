//get Elements: HTML Collection - n da pra usar array methods como forEach -> precisa converter: list = Array.from(list);

//querySelector: NodeList - da pra usar array methods como forEach - n precisa converter!

// getElements By Class Name

const items = document.getElementsByClassName('collection-item');

// console.log(items);

// elements that have the .collection-item class and are inside of the .card-action class

document.querySelector('.card-action').getElementsByClassName('collection-item')[0].style.color = 'blue';


let lis = document.getElementsByTagName('li');

// console.log(lis);


// Convert HTML COllection into array

lis = Array.from(lis);
lis.reverse();

lis[2].style.backgroundColor = 'red';
console.log(lis);


let liOdd = document.querySelectorAll('.card-action ul li:nth-child(odd)');
let liEven = document.querySelectorAll('.card-action ul li:nth-child(even)');

liOdd.forEach(function (item, index) {
    item.innerText = `Item Odd ${index}`;
    item.style.backgroundColor = '#333';
    item.style.color = '#f4f4f4';
});

// you can use length on HTML Collection, so you can use this 'for' below for HTMLCollection without converting it to an array
for (let i = 0; i < liEven.length; i++) {
    
    liEven[i].textContent = `Item Even ${i}`;
    liEven[i].style.backgroundColor = '#f4f4f4';
    liEven[i].style.color = '#333';
}