// array of words 
const words = ["frizzler", "japanize", "maximize", "increase", "bluejack", "coffeecake",
                 "drizzle", "pizzeria", "backpack",  "chemical", "attorney",
                 "commence", "deferred", "dominant", "emphasis", "facility", 
                 "generous", "intranet", "leverage", "marginal", "numerous",
                 "portable", "precious", "provider", "reliance", "rigorous",
                 "shortage", "standout", "warranty", "ultimate", "advisory", 
                 "boundary", "bulletin", "casualty", "cellular", " volatile"]
// each word changed into an array of chars
const arrayWords = []
for (elem of words) {
    arrayWords.push(elem.split(""))
}
// choosing random array from arrayWords
let num = arrayWords.length
let randomNumber = Math.floor(Math.random() * num)
let randomWord = arrayWords[randomNumber]

// matching randomWord with a word from words array 
let chosenWord = words[randomNumber]

// shuffling chars in the chosen word 
// this algorithm is called  Fisher-Yates (aka Knuth) Shuffle.
function shuffledArr(randomWord) {
    for (let i = randomWord.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomWord[i], randomWord[j]] = [randomWord[j], randomWord[i]]
    }  
    return randomWord      
}
// presenting the word on the page 
shuffledArr(randomWord)
randomWord = randomWord.join(" ")
document.getElementById("random-word").innerHTML = randomWord;

// giving 3 chances 
let maxGuesses = 3;
let counter = 0;
document.getElementById("guess-btn").onclick = function () {
        let guessWord= document.getElementById("guess-word").value;
        document.getElementById('guess-word').value = ''
        checkGuess(guessWord)
        counter++;
        if (counter === maxGuesses) {
            document.getElementById("guess").style.display = "none";            
            document.getElementById("message").innerHTML = `Game Over. The word was "${chosenWord}".`
            
        }   
    }
// the main function
function checkGuess(guessWord) {
    if (guessWord == chosenWord) {
        document.getElementById("message").innerHTML = `Correct. The word was ${chosenWord}!`
        document.getElementById("guess").style.display = "none";
        document.getElementById("random-word").style.display = "none";
              
    } else {           
        document.getElementById("message").innerHTML = "Try again"    
    }   
}      
       
// reset button
let btn = document.getElementById("play-again")  ;
btn.addEventListener("click", e => {
    window.location.reload(true);
}
)
     

