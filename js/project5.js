
let cardNumbers = document.getElementById("numbers");
cardNumbers.style.display = "none";

function startGame() {
    cardNumbers.style.display = "block";
}

let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber)


let button = document.getElementById("add-number");


button.addEventListener("click", e => {
let guessNumber = document.getElementById("check-number").value;
guessNumber = Number(guessNumber)
        
document.getElementById("check-number").value = '';
console.log(guessNumber)

    if (guessNumber > randomNumber) {
        console.log(guessNumber)
        message = `${guessNumber} is too high. Try again.`
    } else if (guessNumber < randomNumber) {
        message = `${guessNumber} is too low. Try again.`
    } else {
        message = `Yes, ${guessNumber} is my number.`
        cardNumbers.style.display = "none";
    }
    document.getElementById("your-number").innerHTML = message;

})
 function resetGame () {
    window.location.reload(true);
 }

