console.log('Client side javascript file is loaded!');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log(data.puzzle);
//   });
// });



const weatherForm = document.querySelector('.weatherForm');
const search = document.querySelector('input');
const messageOne = document.querySelector('.message-1');
const messageTwo = document.querySelector('.message-2');
const messageThree = document.querySelector('.message-3');
const messageFour = document.querySelector('.message-4');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  messageOne.textContent = 'Loading...';

  const location = search.value;

  fetch(`/weather?address=${location}`)
    .then((response) => {
      response.json()
        .then((data) => {
          messageOne.textContent = data.location;
          messageTwo.textContent = `Rain Probability: ${data.rainProb}`;
          messageThree.textContent = `Current Fahrenheit Temperature: ${data.currentTemp}`;
          messageFour.textContent = data.today;

        });
    });
});