// GAME FUNCTION:
// - Player must guess a number between a min and max 
// - Player gets a certain amount of guesses
// - Notify player of guesses remaining
// - Notify the player of the correct anser if lose 
// - Let the player choose to play again

// Game Values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3

// UI elements
const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.getElementById('guess-input'),
    guessBtn = document.getElementById('guess-btn'),
    message = document.querySelector('.message')

// Assign UI min and max
minNum.textContent = min
maxNum.textContent = max

// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }

    if (guess === winningNum) {
        guessInput.disabled = true
        guessInput.style.borderColor = 'green'
        guessBtn.style.borderColor = 'green'
        setMessage(`${winningNum} is correct! You win!`, 'green')
    } else {

    }
})

function setMessage(msg, color) {
    message.style.color = color
    message.textContent = msg
}