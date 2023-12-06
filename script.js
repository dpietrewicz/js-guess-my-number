'use strict';

const body = document.body;
const number = document.querySelector('.number');
const highscoreBox = document.querySelector('.highscore');
const scoreBox = document.querySelector('.score');
const inputNumber = document.querySelector('.guess');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(inputNumber.value);
  console.log(secretNumber);

  if (!guess) {
    displayMessage('❌ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    number.textContent = secretNumber;
    number.style.width = '30rem';
    body.style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      highscoreBox.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreBox.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreBox.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  displayMessage('Start guessing...');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreBox.textContent = score;
  number.textContent = '?';
  number.style.width = '15rem';
  inputNumber.value = '';
  body.style.backgroundColor = '#222';
});
