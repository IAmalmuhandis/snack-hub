// script.js

// Example: Change the header text when a button is clicked
const header = document.querySelector('header');
const changeHeaderTextButton = document.querySelector('#changeHeaderTextButton');

changeHeaderTextButton.addEventListener('click', () => {
    header.querySelector('h1').textContent = 'New Website Name';
});
