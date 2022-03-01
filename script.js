'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct number!';

// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.highscore').textContent = 15;

// document.querySelector('.guess').value = 25;
// console.log(document.querySelector('.guess').value);

// const secretNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input!
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number!';

    // When player wins!
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number!💥';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is too high!
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // When guess is too low!
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//....`````.....`````.....CHALLENGE.....`````....`````.....

// 1.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // 2.
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  // 3.
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  // 4.
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
