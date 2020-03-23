// GAME FUNCTION:
// - Player must guess a number between a min and max 
// - Player gets a certain amount of guesses
// - Notify player of guesses remaining
// - Notify the player of the correct anser if lose 
// - Let the player choose to play again

// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3

// UI elements
const game = document.querySelector('.game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.getElementById('guess-input'),
    guessBtn = document.getElementById('guess-btn'),
    message = document.querySelector('.message')

// Assign UI min and max
minNum.textContent = min
maxNum.textContent = max

// Play again event listner
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload()
    }
})

// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);



    if (guess === winningNum) {
        // Game won
        gameOver(true, `${winningNum} is correct! You win!`)
    } else if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    } else {
        guessesLeft -= 1

        if (guessesLeft === 0) {
            // Game over - lost
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)
            guessInput.value = ''
        } else {
            // Game continues - answer wrong
            guessInput.value = ''
            guessInput.style.borderColor = 'red'
            guessBtn.style.borderColor = 'red'
            setMessage(`Incorrect Guess. ${guessesLeft} guesses remaining!`, 'red')
        }
    }
})

function gameOver(won, message) {
    let color
    won === true ? color = 'green' : color = 'red'
    guessInput.style.borderColor = color
    guessBtn.style.borderColor = color
    setMessage(message, color)

    // Play Again
    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
}

function setMessage(msg, color) {
    message.style.color = color
    message.textContent = msg
}

function getRandomNum(min, max) {
    let number = Math.floor(Math.random() * (max - min + 1) + min)
    return number
}