console.log('Client side javascript file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
    console.log(data.puzzle);
  });
});



const weatherForm = document.querySelector('.weatherForm');
const search = document.querySelector('input');
const messageOne = document.querySelector('.message-1');
const messageTwo = document.querySelector('.message-2');


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  messageOne.textContent = 'Loading...';

  const location = search.value;

  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((response) => {
      response.json()
        .then((data) => {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.today;
        });
    });
});