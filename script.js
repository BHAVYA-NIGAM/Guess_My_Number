'use strict';

/*
// Section 7: DOM & Events Fundamentals -- 72
// Selecting and Manipulating Elements
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value); 
*/



// Section 7: DOM & Events Fundamentals -- 73
// Handling Click Events

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number((document.querySelector('.guess').value));
  console.log(guess, typeof guess);

  // When there is no input
  if(!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    // When the guess is correct
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#68b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if(score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess === secretNumber + 1) {
    if (score > 1) {
      // document.querySelector('.message').textContent = 'You are close!';
      displayMessage('You are close!');

      score--;
      document.querySelector('.score').textContent = score; 
    } else {
      document.querySelector('.message').textContent ='☹ You lost the game!';
      document.querySelector('.score').textContent = 0; 
    }
  } else if (guess === secretNumber - 1) {
    if (score > 1) {
      // document.querySelector('.message').textContent = 'You are close!';
      displayMessage('You are close!');
      score--;
      document.querySelector('.score').textContent = score; 
    } else {
      document.querySelector('.message').textContent ='☹ You lost the game!';
      document.querySelector('.score').textContent = 0; 
    }
  }  // When the guess is wrong
  else if(guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high' : '📉 Too low';
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score; 
    } else {
      document.querySelector('.message').textContent ='☹ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // }
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score; 
  //   } else {
  //     document.querySelector('.message').textContent ='☹ You lost the game!';
  //     document.querySelector('.score').textContent = 0; 
  //   }
  //   // When the guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //   document.querySelector('.message').textContent = '📉 Too low';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   }  else {
  //     document.querySelector('.message').textContent ='☹ You lost the game!';
  //     document.querySelector('.score').textContent = 0; 
  //   }
  // }
});

// Getting everything back as it was WHEN CLICKED AGAIN button
document.querySelector('.again').addEventListener('click', function() {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';

  displayMessage('tart guessing...');
  
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  
  document.querySelector('.score').textContent = 10;
  
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
});

