// 1. where to add

const placeUL = document.getElementById('placeUL');


// 2. what to add.

const li = document.createElement('li');
li.innerText =" this is new place where need to go.";
placeUL.appendChild(li);


//  1. add a section.. where to add

const mainContainer = document.getElementById('main-container');


//  2. what to add
 
const section = document.createElement('section');
mainContainer.appendChild(section);

const h1 = document.createElement('h1');
h1.innerText = "My favorite foods.";
section.appendChild(h1);


const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText ="biriany";
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText ="salad";
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText ="hospos";
ul.appendChild(li3);
const li4 = document.createElement('li');
li4.innerText ="chicken";
ul.appendChild(li4);
const li5 = document.createElement('li');
li5.innerText ="beaf";
ul.appendChild(li5);


section.appendChild(ul);


//  add html content

const sectionDress = document.createElement('section');

sectionDress.innerHTML = `
    <h1>My favorite dress</h1>
    <ul>
        <li>T-shirt</li>
        <li>shirt</li>
        <li>jins</li>
        <li>lungi</li>
    </ul>
`

mainContainer.appendChild(sectionDress);

