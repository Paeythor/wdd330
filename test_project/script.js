
const toggleButton = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');

let lastPickedColor = 'black';

toggleButton.addEventListener('click', () => {
  if (listDiv.style.display === 'none') {
    listDiv.style.display = 'block';
    toggleButton.textContent = 'Hide list';
  } else {
    listDiv.style.display = 'none';
    toggleButton.textContent = 'Show list';
  }
});


const userInput = document.querySelector('.userInput');
const colorButton = document.querySelector('button.description');
const colorDesc = document.querySelector('p.description');

colorButton.addEventListener('click', () => {
  lastPickedColor = userInput.value;
  const items = document.querySelectorAll('li');
  items.forEach(li => li.style.color = lastPickedColor);
  colorDesc.textContent = 'The list colour is: ' + lastPickedColor;
});

const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('.addItemButton');

addItemButton.addEventListener('click', () => {
  if (addItemInput.value.trim() === '') return;
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = addItemInput.value;
  li.style.color = lastPickedColor;
  ul.appendChild(li);
  addItemInput.value = '';
});


const removeItemButton = document.querySelector('.removeItemButton');

removeItemButton.addEventListener('click', () => {
  const ul = document.querySelector('ul');
  const last = ul.querySelector('li:last-child');
  if (last) ul.removeChild(last);
});


listDiv.addEventListener('mouseover', e => {
  if (e.target.tagName === 'LI') {
    e.target.style.textTransform = 'uppercase';
  }
});

listDiv.addEventListener('mouseout', e => {
  if (e.target.tagName === 'LI') {
    e.target.style.textTransform = 'lowercase';
  }
});
