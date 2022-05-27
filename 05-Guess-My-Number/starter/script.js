'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = calcSecretNumber();
let highScore = 0;

function calcSecretNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}

let score = 20;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const eventHandler = () => {
    const guess = Number(document.querySelector('.guess').value);
    //When no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'No number!';
        displayMessage('No number!');
        //When player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct number!';
        displayMessage('Correct number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        //When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     guess > secretNumber
            //         ? 'Number is too high'
            //         : 'Number is too low';
            displayMessage(
                guess > secretNumber
                    ? 'Number is too high'
                    : 'Number is too low'
            );
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent =
            //     'You lost the game';
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
        //When guess is too high
    }
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent =
    //             'Number is too high';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent =
    //             'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } else if (guess !== secretNumber) {
    //     //When guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent =
    //             'Number is too low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent =
    //             'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
};

document.querySelector('.btn.check').addEventListener('click', eventHandler);

const resetEventHandler = () => {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    secretNumber = calcSecretNumber();
    score = 20;

    console.log(secretNumber);
};

document
    .querySelector('.btn.again')
    .addEventListener('click', resetEventHandler);
