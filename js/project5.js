// hide the input card
let cardNumbers = document.getElementById("numbers");
cardNumbers.style.display = "none";

// start the game on pressing yes button
function startGame() {
    cardNumbers.style.display = "block";
}

// computer randomly chooses the number
let randomNumber = Math.floor(Math.random() * 101);


// counting the tries 
let maxGuesses = 7;
let counter = 0
let button = document.getElementById("add-number");

// taking input when user clicks the Submit button 
button.addEventListener("click", e => {
let guessNumber = document.getElementById("check-number").value;
guessNumber = Number(guessNumber)        
document.getElementById("check-number").value = '';

checkGuess(guessNumber)
counter++;

//checking if the number of wrong guesses is equal to max guesses
if (counter === maxGuesses) {
    message = `Game Over. My number was ${randomNumber}.`;
    document.getElementById("your-number").innerHTML = message;
    cardNumbers.style.display = "none";
}  
})

// main logic - comparing user's number with random number 
function checkGuess(guessNumber) {
    if (!isNaN(guessNumber)) {
        if (guessNumber > randomNumber) {
            
            message = `${guessNumber} is too high. Try again.`
        } else if (guessNumber < randomNumber) {
            message = `${guessNumber} is too low. Try again.`
        } else {
            message = `Yes, ${guessNumber} is my number.`
            cardNumbers.style.display = "none";
        }
        document.getElementById("your-number").innerHTML = message;
    } else {
        message = "A number please"
        document.getElementById("your-number").innerHTML = message;
    }
   
}
// restarting game
 function resetGame () {
    window.location.reload(true);
 }

